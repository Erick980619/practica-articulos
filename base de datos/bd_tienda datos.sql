-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jul 22, 2023 at 10:53 PM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bd_tienda`
--

-- --------------------------------------------------------

--
-- Table structure for table `articulo`
--

CREATE TABLE `articulo` (
  `idArticulo` int(11) NOT NULL,
  `codigo` varchar(50) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `categoria` varchar(100) NOT NULL,
  `estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `articulo`
--

INSERT INTO `articulo` (`idArticulo`, `codigo`, `nombre`, `categoria`, `estado`) VALUES
(1, '4234234', 'Colchon', 'Hogar y muebles', 1),
(2, '645654', 'Sala', 'Hogar y muebles', 1),
(3, '576789', 'Almohada Spring air', 'Hogar y muebles', 1),
(4, '85394', 'Laptop Hp', 'Electrónica', 1),
(5, '090990', 'Laptop Dell Gamer', 'Electrónica', 1);

-- --------------------------------------------------------

--
-- Table structure for table `caracteristica`
--

CREATE TABLE `caracteristica` (
  `idCaracteristica` int(11) NOT NULL,
  `idArticulo` int(11) NOT NULL,
  `caracteristica_descripcion` varchar(100) NOT NULL,
  `valor` varchar(100) NOT NULL,
  `estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `caracteristica`
--

INSERT INTO `caracteristica` (`idCaracteristica`, `idArticulo`, `caracteristica_descripcion`, `valor`, `estado`) VALUES
(1, 3, 'Algodon', '100', 1),
(2, 3, 'Marca', 'Spring', 0),
(3, 4, 'RAM', '8GB', 1),
(4, 5, 'Disco Duro', 'SSD', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articulo`
--
ALTER TABLE `articulo`
  ADD PRIMARY KEY (`idArticulo`);

--
-- Indexes for table `caracteristica`
--
ALTER TABLE `caracteristica`
  ADD PRIMARY KEY (`idCaracteristica`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articulo`
--
ALTER TABLE `articulo`
  MODIFY `idArticulo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `caracteristica`
--
ALTER TABLE `caracteristica`
  MODIFY `idCaracteristica` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
