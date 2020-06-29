-- Ejercicio1: Liga de futbol

-- jugadores (#id, nombre, apellidos, fecha_nacimiento, direccion, telefono, -id_equipo)
-- equipos (#id, nombre, patrocinador, color1, color2, categoria)
-- partidos (#id, incidencias, fecha, campo, arbitro)
-- partido_equipo (#(-id_partido, -id_equipo))

USE ejercicio1;

CREATE TABLE IF NOT EXISTS equipos (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE NOT NULL,
    patrocinador VARCHAR(50),
    color1 VARCHAR(50),
    color2 VARCHAR(50),
    categoria VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS jugadores (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    fecha_nacimiento DATE,
    direccion VARCHAR(50),
    telefono VARCHAR(15),
    id_equipo INT UNSIGNED,
    FOREIGN KEY (id_equipo) REFERENCES equipos(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS partidos (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    incidencias VARCHAR(50),
    fecha DATE,
    campo VARCHAR(50),
    arbitro VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS partido_equipo (
	id_partido INT UNSIGNED,
    FOREIGN KEY (id_partido) REFERENCES partidos(id),
    id_equipo INT UNSIGNED,
    FOREIGN KEY (id_equipo) REFERENCES equipos(id),
    condicion VARCHAR(10),
    goles TINYINT,
    PRIMARY KEY (id_partido, id_equipo)
);