-- Ejercicio2: Polideportivos

-- usuarios (#id, dni, nombre, apellidos, email, telefono, fecha_nacimiento, contrasena)
-- reservas (#id, fecha_reserva, fecha_uso, precio, -id_pista, -id_usuario)
-- polideportivos (#id, nombre, direccion, extension)
-- pistas (#id. codigo, tipo, operativa, precio, fecha_ultima_reserva, -id_polideportivo)
-- usuario_reserva (#id, -id_usuario, -id_reserva, rating)
-- hobbies (#id, -id_usuario, hobby)
-- usuario_usuario (#id, -id_usuario_emisor, -id_usuario_receptor)

USE polideportivos;

SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE usuarios (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    dni VARCHAR(9) UNIQUE,
    nombre VARCHAR(50),
    apellidos VARCHAR(50),
    email VARCHAR(50) UNIQUE NOT NULL,
    telefono VARCHAR(50),
    fecha_nacimiento DATE,
    contrasena VARCHAR(40) NOT NULL
);

CREATE TABLE reservas (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    fecha_reserva TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_uso DATETIME,
    precio DECIMAL(7, 2) DEFAULT 0,
    id_pista INT UNSIGNED,
    FOREIGN KEY (id_pista) REFERENCES pistas(id),
    id_usuario INT UNSIGNED,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

CREATE TABLE polideportivos (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    direccion VARCHAR(50),
    extension INT DEFAULT 0
);

CREATE TABLE pistas (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(10),
    tipo VARCHAR(20),
    operativa BOOLEAN DEFAULT FALSE,
    precio DECIMAL(7, 2) DEFAULT 0,
    fecha_ultima_reserva DATETIME,
    id_polideportivo INT UNSIGNED,
    FOREIGN KEY (id_polideportivo) REFERENCES polideportivos(id)
);

CREATE TABLE usuario_reserva (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT UNSIGNED,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    id_reserva INT UNSIGNED,
    FOREIGN KEY (id_reserva) REFERENCES reservas(id),
    rating INT DEFAULT 0
);

CREATE TABLE hobbies (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT UNSIGNED,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    hobby VARCHAR(50)
);

CREATE TABLE usuario_usuario (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    id_usuario_emisor INT UNSIGNED,
    FOREIGN KEY (id_usuario_emisor) REFERENCES usuario_usuario(id),
    id_usuario_receptor INT UNSIGNED,
    FOREIGN KEY (id_usuario_receptor) REFERENCES usuario_usuario(id)
);

SET FOREIGN_KEY_CHECKS = 1;