-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-12-2021 a las 17:22:57
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `la_comarca`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `travels`
--

CREATE TABLE `travels` (
  `id` int(11) NOT NULL,
  `city` varchar(30) NOT NULL,
  `country` varchar(30) NOT NULL,
  `pack` varchar(30) NOT NULL,
  `image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `travels`
--

INSERT INTO `travels` (`id`, `city`, `country`, `pack`, `image`) VALUES
(2, 'Valle Grande', 'Mendoza', '2 noches', 'p2hm90qzfyiqjeacvz7s'),
(3, 'Parque Naional Los Alerces', 'Chubut', '6 noches', 'ohkxa6qrwj92q4hkklsd'),
(4, 'Las Leñas', 'Mendoza', '4 noches', 'yiui19wxvwotllo8xpmj'),
(5, 'Parque Nacional Los Arrayanes', 'Neuquen', '2 noches', 'https://picsum.photos/id/1037/367/267'),
(6, 'Cascada del Toro Muerto', 'Córdoba', '3 noches', 'https://picsum.photos/id/1039/367/267'),
(7, 'Parque Nacional Nahuel Huapi', 'Río Negro', '6 noches', 'kjvs7n7n6qxevurl9jgc'),
(8, 'Mar del Plata', 'Buenos Aires', '3 noches', 'siibv7tvbhrrooaqcyyo'),
(10, 'Esteros del Iberá', 'Corrientes', '4 noches', 'https://picsum.photos/id/11/367/267');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `user_name` varchar(30) NOT NULL,
  `user_pass` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_name`, `user_pass`) VALUES
('Juan', 81),
('Laura', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `travels`
--
ALTER TABLE `travels`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_name`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `travels`
--
ALTER TABLE `travels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
