CREATE DATABASE aerolinea;

USE aerolinea;

CREATE TABLE base (
    codigo INT PRIMARY KEY,
    nombre VARCHAR(255)
)

CREATE TABLE aviones (
  codigo INT PRIMARY KEY,
  tipo VARCHAR(255),
  manteniendo DATETIME,
  base_codigo INT,
  FOREIGN KEY (base_codigo) REFERENCES base(codigo)

);

CREATE TABLE pilotos (
  codigo INT PRIMARY KEY,
  nombre VARCHAR(255),
  horas_vuelo INT,
  base_codigo INT,
  FOREIGN KEY (base_codigo) REFERENCES base(codigo)
);

CREATE TABLE tripulacion (
  codigo INT PRIMARY KEY,
  nombre VARCHAR(255),
  base_codigo INT,
  FOREIGN KEY (base_codigo) REFERENCES base(codigo)
);


CREATE TABLE vuelos (
  numero_vuelo VARCHAR(255) PRIMARY KEY,
  origen VARCHAR(255),
  destino VARCHAR(255),
  hora_partida DATETIME,
  horas_aterrizaje DATETIME,
  avion_codigo INT,
  piloto_codigo INT,
  tripulacion_codigo INT,
  FOREIGN KEY (avion_codigo) REFERENCES aviones(codigo),
  FOREIGN KEY (piloto_codigo) REFERENCES pilotos(codigo),
  FOREIGN KEY (tripulacion_codigo) REFERENCES tripulacion(codigo)
);
