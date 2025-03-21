const { User, Address } = require("../database/models");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

const usersControllers = {
  login: (req, res, next) => {
    res.render("users/login", { title: "Login" });
  },
  processLogin: async (req, res, next) => {
    const { correo } = req.body;
    try {
      const errores = validationResult(req);
      if (errores.array().length > 0) {
        console.log("errores: ", errores.mapped());

        res.render("users/login", {
          errores: errores.mapped(),
          correo,
        });
      } else {
        const user = await User.findOne({ where: { correo } });
        const { nombre, id, avatar } = user;
        console.log(id);

        req.session.user = { correo, nombre, id, avatar };
        console.log("body", req.body);

        if (req.body.recuerdame) {
          res.cookie(
            "user",
            { correo, nombre, id, avatar },
            { maxAge: 1000 * 60 * 30 }
          );
        }
        res.redirect(`/users/profile/${id}`);
      }
    } catch (error) {}
  },

  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("user");
    res.redirect("/users/login");
  },
  register: function (req, res, next) {
    res.render("users/register", { title: "registro de usuario" });
  },
  store: (req, res, next) => {
    try {
      const { nombre, correo, contrasena } = req.body;
      const errores = validationResult(req);

      if (errores.array().length > 0) {
        res.render("users/register", {
          errores: errores.mapped(),
          nombre,
          correo,
          contrasena,
        });
      } else {
        bcrypt.hash(contrasena, 10, async function (err, hash) {
          if (err) {
            console.log("error en el hash", err);
            throw new Error("Error en el hash");
          }

          await User.create({
            nombre,
            correo,
            contrasena: hash,
            rol_id: 3,
          });

          res.redirect("/users/login");
        });
      }
    } catch (error) {
      console.log("el error capturado: ", error);
      res.render("error", error);
    }
  },

  profile: async (req, res) => {
    const id = req.params.id;
    try {
      const user = await User.findByPk(id, {
        exclude: ["created_at", "updated_at"],
        include: ["address"]
      });
      const response = await fetch(
        "https://apis.datos.gob.ar/georef/api/provincias"
      );
      console.log("response: ", response);

      if (!response.ok) {
        throw new Error("Hubo un problema con la peticion");
      }

      const data = await response.json();
      const provincias = data.provincias.sort((a, b) =>
        a.nombre.localeCompare(b.nombre)
      );
      const idProvincia = user.provincia ? user.provincia : provincias[0].id;

      const responseLocalidades = await fetch(
        `https://apis.datos.gob.ar/georef/api/localidades?provincia=${idProvincia}&max=500`
      );
      const dataLocalidades = await responseLocalidades.json();
      const localidades = dataLocalidades.localidades.sort((a, b) =>
        a.nombre.localeCompare(b.nombre)
      );

      res.send(user);
      res.render("users/profile", {
        title: "Perfil",
        user,
        provincias,
        localidades,
      });
    } catch (error) {
      console.log("error: ", error);
      res.render("error", error);
    }
  },
  update: async (req, res) => {
    const id = req.params.id;
    try {
      const user = await User.findByPk(id, { include: ["address"] });

      req.body.avatar = req.file ? req.file.filename : user.avatar;
      if (req.body.contrasena && req.body.contrasena2) {
        req.body.contrasena = bcrypt.hashSync(req.body.contrasena, 10);
      } else {
        req.body.contrasena = user.contrasena;
      }

      delete req.body.contrasena2;

      await User.update(req.body, {
        where: { id },
      });

      if (
        req.body.calle &&
        req.body.altura &&
        req.body.localidad &&
        req.body.provincia &&
        req.body.cp
      ) {
        if (user.address.length > 0) {
          await Address.update(
            {
              calle: req.body.calle,
              altura: req.body.altura,
              localidad: req.body.localidad,
              provincia: req.body.provincia,
              cp: req.body.cp,
            },
            {
              where: { user_id: id },
            }
          );
        } else {
          await Address.create({
            calle: req.body.calle,
            altura: req.body.altura,
            localidad: req.body.localidad,
            provincia: req.body.provincia,
            cp: req.body.cp,
            user_id: id,
          });
        }
      }

      const userUpdated = await User.findByPk(id, {
        include: [
          {
            attributes: { 
              exclude: ["createdAt", "updatedAt"]
            }
          }
        ],
      });
      res.send(userUpdated);
    } catch (error) {
      console.log("error: ", error);
      res.render("error", error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      req.session.destroy();
      res.clearCookie("user");
      const id = req.params.id;
      await User.destroy({ where: { id } });
      res.redirect("/users/register");
    } catch (error) {
      console.log("error: ", error);
      res.render("error", error);
    }
  },
};

module.exports = usersControllers;
