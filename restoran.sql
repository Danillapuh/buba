-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 28 2023 г., 13:13
-- Версия сервера: 5.7.39
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `restoran`
--

-- --------------------------------------------------------

--
-- Структура таблицы `dish_item`
--

CREATE TABLE `dish_item` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_url` text COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `dish_item`
--

INSERT INTO `dish_item` (`id`, `name`, `image_url`) VALUES
(1, 'Хлеб чорный', 'https://inbusiness.kz/uploads/25/images/GC3b1GDM.jpg'),
(2, 'Вода из под крана', 'https://img.championat.com/i/17/54/1603801754322328240.jpg'),
(3, 'Шаурма', 'https://kulinarenok.ru/img/steps/31445/1-7.jpg'),
(4, 'Салат \"Греческий\"', 'https://static.1000.menu/res/640/img/content-v2/9a/aa/1980/salat-grecheskii-s-kuricei-klassicheskii_1648792206_11_max.jpg');

-- --------------------------------------------------------

--
-- Структура таблицы `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `shiftId` int(11) DEFAULT NULL,
  `cookedById` int(11) DEFAULT NULL,
  `addedById` int(11) DEFAULT NULL,
  `statusId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `order`
--

INSERT INTO `order` (`id`, `shiftId`, `cookedById`, `addedById`, `statusId`) VALUES
(4, 9, 6, 8, 2),
(5, 9, NULL, 8, 5),
(6, 13, 6, 8, 4),
(7, 13, NULL, 8, 5),
(8, 13, NULL, 7, 1),
(9, 13, NULL, 7, 1),
(10, 13, NULL, 6, 1),
(11, 14, NULL, 6, 4),
(12, 14, NULL, 7, 5),
(13, 14, 6, 7, 3),
(14, 14, NULL, 7, 1),
(15, 15, NULL, 7, 1),
(16, 15, NULL, 7, 4),
(17, 15, NULL, 7, 5),
(18, 15, 5, 7, 3),
(19, 15, NULL, 7, 1),
(20, 16, 5, 7, 2),
(21, 16, NULL, 7, 1),
(22, 16, NULL, 7, 1),
(23, 16, NULL, 8, 1),
(24, 16, NULL, 8, 1),
(25, 16, NULL, 8, 1),
(26, 16, NULL, 8, 1),
(27, 16, NULL, 8, 1),
(28, 16, NULL, 8, 1),
(29, 16, NULL, 8, 1),
(30, 16, NULL, 8, 1),
(31, 16, NULL, 8, 1),
(32, 16, NULL, 8, 1),
(33, 16, NULL, 8, 1),
(34, 16, NULL, 8, 1),
(35, 16, NULL, 8, 1),
(36, 16, NULL, 8, 1),
(37, 16, NULL, 8, 1),
(38, 16, NULL, 8, 1),
(39, 16, NULL, 8, 1),
(40, 16, NULL, 8, 1),
(41, 16, NULL, 8, 1),
(42, 16, NULL, 8, 1),
(43, 16, NULL, 8, 1),
(44, 17, NULL, 8, 1),
(45, 17, NULL, 7, 1),
(48, 17, NULL, 10, 1),
(49, 18, 5, 10, 3),
(50, 18, 6, 10, 2),
(51, 18, 6, 8, 3),
(52, 18, 6, 7, 2),
(53, 18, 6, 7, 3),
(54, 18, NULL, 7, 4),
(55, 18, 5, 8, 2),
(56, 18, 6, 10, 2),
(57, 18, 5, 6, 3),
(58, 18, 6, 6, 2),
(59, 18, 5, 6, 3),
(60, 18, NULL, 6, 1),
(61, 18, 6, 6, 2),
(62, 18, NULL, 6, 1),
(63, 18, NULL, 6, 1),
(64, 18, NULL, 6, 1),
(65, 18, 5, 6, 3),
(66, 18, NULL, 6, 1),
(67, 18, NULL, 6, 1),
(68, 18, NULL, 6, 1),
(69, 18, NULL, 6, 5),
(70, 18, NULL, 6, 4),
(71, 18, NULL, 6, 1),
(72, 18, NULL, 6, 1),
(73, 18, 6, 6, 3),
(74, 18, NULL, 6, 1),
(75, 18, NULL, 6, 1),
(76, 18, NULL, 6, 1),
(77, 18, NULL, 6, 1),
(78, 18, NULL, 6, 1),
(79, 18, NULL, 6, 1),
(80, 18, NULL, 6, 1),
(81, 19, 9, 6, 2),
(82, NULL, NULL, 7, 1),
(83, 19, 6, 8, 3),
(84, 19, 9, 10, 2),
(85, 19, NULL, 8, 1),
(86, 19, 6, 8, 2),
(87, 19, NULL, 8, 1),
(88, 19, NULL, 8, 1),
(89, 19, NULL, 8, 1),
(90, 19, NULL, 8, 1),
(91, 19, NULL, 8, 1),
(92, 19, NULL, 8, 1),
(93, 19, 6, 8, 2),
(95, 20, 6, 8, 3),
(96, 20, 6, 8, 2),
(97, 20, NULL, 8, 1),
(98, 20, NULL, 8, 1),
(99, 20, NULL, 8, 1),
(100, 20, 6, 8, 2),
(101, 20, NULL, 8, 1),
(102, 20, NULL, 8, 1),
(103, 20, NULL, 8, 1),
(104, 20, NULL, 8, 1),
(105, 20, NULL, 8, 1),
(106, 20, NULL, 8, 1),
(107, 20, NULL, 8, 1),
(108, 20, NULL, 8, 1),
(109, 20, NULL, 8, 1),
(110, 20, NULL, 8, 1),
(111, 20, NULL, 8, 1),
(112, 20, NULL, 8, 1),
(113, 20, NULL, 8, 1),
(114, 20, NULL, 8, 1),
(115, 20, NULL, 8, 1),
(116, 20, NULL, 8, 1),
(117, 20, NULL, 8, 1),
(118, 20, NULL, 8, 1),
(119, 20, NULL, 8, 1),
(120, 20, NULL, 8, 1),
(121, 20, NULL, 8, 1),
(122, 20, NULL, 8, 1),
(123, 20, NULL, 8, 1),
(124, 20, NULL, 8, 1),
(125, 20, NULL, 8, 1),
(126, 20, NULL, 8, 1),
(127, 12, 6, 8, 4),
(128, 12, 6, 8, 2),
(129, 12, NULL, 8, 5),
(130, 12, NULL, 8, 5),
(131, 12, NULL, 7, 1),
(132, 12, 6, 7, 2),
(133, 12, 6, 6, 2),
(134, 12, 6, 6, 2),
(135, 12, 6, 6, 2),
(136, 12, 6, 6, 2),
(137, 12, 6, 10, 2),
(138, 12, NULL, 10, 1),
(139, 12, 6, 10, 2),
(140, 12, NULL, 10, 1),
(141, 12, 6, 10, 4),
(142, 12, 6, 10, 4),
(143, 12, NULL, 10, 1),
(144, 12, 6, 10, 2),
(145, 12, 6, 10, 4),
(146, 12, NULL, 10, 1),
(147, 12, 6, 10, 4),
(148, 12, NULL, 10, 1),
(149, 12, NULL, 10, 1),
(150, 12, NULL, 10, 1),
(151, 12, NULL, 10, 1),
(152, 12, 6, 10, 4),
(153, 12, NULL, 10, 1),
(154, 24, 6, 10, 3),
(155, 24, NULL, 8, 1),
(156, 24, NULL, 8, 1),
(157, 24, NULL, 8, 5),
(158, 24, NULL, 8, 1),
(159, 24, NULL, 8, 1),
(160, 24, NULL, 8, 1),
(161, 24, NULL, 8, 1),
(162, 24, NULL, 8, 1),
(163, 24, NULL, 8, 1),
(164, 24, NULL, 8, 1),
(165, 24, NULL, 8, 1),
(166, 25, 6, 7, 4),
(167, 25, NULL, 7, 1),
(168, 25, NULL, 7, 1),
(169, 25, NULL, 7, 1),
(170, 25, NULL, 7, 5),
(171, 25, NULL, 7, 5),
(172, 25, NULL, 7, 5),
(173, 25, NULL, 7, 5),
(174, 25, NULL, 7, 5),
(175, 25, NULL, 7, 5),
(176, 25, NULL, 7, 5),
(177, 25, NULL, 7, 5);

-- --------------------------------------------------------

--
-- Структура таблицы `order_dishes`
--

CREATE TABLE `order_dishes` (
  `id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `orderId` int(11) DEFAULT NULL,
  `dishId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `order_dishes`
--

INSERT INTO `order_dishes` (`id`, `amount`, `orderId`, `dishId`) VALUES
(4, 5, 4, 2),
(5, 2, 4, 1),
(6, 12, 5, 1),
(7, 12, 6, 1),
(8, 4, 7, 2),
(9, 4, 7, 1),
(10, 1, 7, 2),
(11, 1, 8, 2),
(12, 1, 15, 2),
(13, 1, 15, 1),
(14, 6, 15, 1),
(15, 6, 16, 1),
(16, 6, 17, 2),
(17, 1, 15, 2),
(18, 1, 20, 2),
(19, 5, 20, 1),
(20, 5, 81, 1),
(21, 2, 81, 2),
(22, 2, 81, 3),
(23, 1, 81, 4),
(24, 1, 83, 4),
(25, 2, 85, 4),
(26, 2, 85, 3),
(27, 2, 95, 4),
(28, 1, 96, 3),
(29, 3456, 96, 2),
(30, 3, 127, 1),
(31, 9, 127, 3),
(32, 3, 127, 4),
(33, 4, 128, 2),
(34, 3, 132, 1),
(35, 1, 132, 4),
(36, 1, 133, 3),
(37, 2, 134, 1),
(38, 2, 136, 2),
(39, 5, 136, 1),
(40, 5, 135, 1),
(41, 4, 135, 3),
(42, 4, 133, 2),
(43, 4, 143, 2),
(44, 4, 138, 2),
(45, 4, 140, 2),
(46, 4, 146, 2),
(47, 2, 142, 3),
(48, 2, 138, 3),
(49, 2, 137, 3),
(50, 2, 141, 3),
(51, 2, 139, 3),
(52, 2, 139, 3),
(53, 2, 139, 3),
(54, 2, 139, 3),
(55, 1, 143, 4),
(56, 1, 143, 4),
(57, 1, 141, 4),
(58, 1, 141, 4),
(59, 1, 141, 4),
(60, 1, 139, 4),
(61, 1, 137, 4),
(62, 1, 149, 4),
(63, 1, 152, 4),
(64, 1, 152, 4),
(65, 1, 153, 4),
(66, 1, 148, 1),
(67, 1, 152, 1),
(68, 1, 151, 1),
(69, 1, 150, 1),
(70, 80, 138, 1),
(72, 1, 155, 1),
(73, 1, 155, 3),
(74, 3, 155, 3),
(75, 1, 155, 3),
(76, 1, 155, 3),
(77, 1, 155, 3),
(78, 1, 155, 2),
(79, 1, 155, 2),
(80, 1, 155, 2),
(81, 1, 155, 1),
(86, 6, 157, 2),
(87, 1, 157, 1),
(88, 1, 157, 1),
(89, 1, 157, 1),
(90, 1, 157, 1),
(91, 1, 161, 1),
(92, 1, 161, 1),
(93, 5, 161, 1),
(94, 1, 156, 2),
(95, 7, 155, 4),
(96, 5, 168, 1),
(97, 1, 166, 4),
(98, 2, 167, 3),
(99, 1, 167, 1),
(100, 1, 170, 2),
(101, 1, 169, 4),
(102, 3, 169, 3);

-- --------------------------------------------------------

--
-- Структура таблицы `order_status`
--

CREATE TABLE `order_status` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `order_status`
--

INSERT INTO `order_status` (`id`, `name`) VALUES
(1, 'Принят'),
(2, 'Готовится'),
(3, 'Приготовлен'),
(4, 'Оплачен'),
(5, 'Отменен');

-- --------------------------------------------------------

--
-- Структура таблицы `shift_status`
--

CREATE TABLE `shift_status` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `shift_status`
--

INSERT INTO `shift_status` (`id`, `name`) VALUES
(1, 'Создана'),
(2, 'Открыта'),
(3, 'Закрыта');

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `photo_url` text COLLATE utf8mb4_unicode_ci,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `profileId` int(11) DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `photo_url`, `name`, `profileId`, `roleId`) VALUES
(5, 'https://robohash.org/sfdgsgs/set=set3', 'кэтик', 1, 3),
(6, 'https://www.meme-arsenal.com/memes/15733e52ca5dfdd7ff124fc825c58065.jpg', 'Валлера Поварюк', 2, 3),
(7, 'https://lamcdn.net/lookatme.ru/post_image-image/mFRLo8fBJyZqFkTYviFDpw-small.jpg', 'Гачи Мучик', 3, 2),
(8, 'data:image/jpeg;base64,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', 'Жорислав Подносович', 4, 2),
(9, 'https://t3.ftcdn.net/jpg/05/70/71/06/360_F_570710660_Jana1ujcJyQTiT2rIzvfmyXzXamVcby8.jpg', 'валера (админ)', 5, 1),
(10, 'data:image/jpeg;base64,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', 'валера (joff)777', 6, 2),
(11, 'https://memepedia.ru/wp-content/uploads/2017/04/%D0%BD%D1%83%D1%81%D1%80%D0%B5%D1%82-%D0%BE%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB.jpg', 'ПОВОР ЛЕГЕНДА', 7, 3);

-- --------------------------------------------------------

--
-- Структура таблицы `user_profile`
--

CREATE TABLE `user_profile` (
  `id` int(11) NOT NULL,
  `password` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `login` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roleId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `user_profile`
--

INSERT INTO `user_profile` (`id`, `password`, `login`, `roleId`) VALUES
(1, '$2b$06$YgVxwN8G6pliHtqX5vUT7uAYZxoqZIZxW0BWMeRMbxdwExYxJQnD2', 'povor', 3),
(2, '$2b$06$ERh/mFt4pqUWqrqcOuVmYun45n8EwZiEbX2uzCZb5CxoJVPFviNCS', 'valeraOffnik', 3),
(3, '$2b$06$dADxu8oC4NJJrPFpzOuLj.A1shqKLFb97VpKD04Ay9TnFDf.vl5tq', 'kek228', 2),
(4, '$2b$06$UeJMXJuXlQVgW52q8Ckom.LwuYhxzrEEEDMLva08zyRu3HHkCluKa', 'jorik', 2),
(5, '$2b$06$ubSefQBTZ3Rkw78H1GuPHegmf0fXDUzu/u3I1qp/2MVHMycnCZq9e', 'admin', 1),
(6, '$2b$06$YU9VhLrdn8nnhTBJhBhqI.8IxJ4Ejibz1j3wIZHcWGYVOQ8jSG0pG', 'admin', 2),
(7, '$2b$06$kSgATZh8p3V0Xrn9fl1S3.3L69WJqePwqQwfZWqiZf2liany7Yz2O', 'POVOR', 3);

-- --------------------------------------------------------

--
-- Структура таблицы `user_role`
--

CREATE TABLE `user_role` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `user_role`
--

INSERT INTO `user_role` (`id`, `name`) VALUES
(1, 'Администратор'),
(2, 'Официант'),
(3, 'Повор');

-- --------------------------------------------------------

--
-- Структура таблицы `work_shift`
--

CREATE TABLE `work_shift` (
  `id` int(11) NOT NULL,
  `dateStart` timestamp NOT NULL,
  `dateEnd` datetime NOT NULL,
  `statusId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `work_shift`
--

INSERT INTO `work_shift` (`id`, `dateStart`, `dateEnd`, `statusId`) VALUES
(8, '2023-05-19 17:21:17', '2023-05-20 01:47:17', 3),
(9, '2023-05-20 17:21:17', '2023-05-21 01:47:17', 3),
(10, '2023-05-14 17:21:17', '2023-05-17 01:47:17', 3),
(11, '2020-05-14 17:21:17', '2021-05-17 01:47:17', 3),
(12, '2023-05-25 17:21:17', '2023-05-27 01:47:17', 3),
(13, '2023-05-21 13:21:17', '2023-05-21 10:47:17', 3),
(14, '2023-05-21 20:00:17', '2023-05-21 17:47:17', 3),
(15, '2023-05-22 02:00:17', '2023-05-21 22:47:17', 3),
(16, '2023-05-23 02:00:17', '2023-05-22 22:47:17', 3),
(17, '2023-05-23 07:00:17', '2023-05-23 03:47:17', 3),
(18, '2023-05-23 22:14:17', '2023-05-23 22:47:22', 3),
(19, '2023-05-24 16:14:17', '2023-05-24 13:47:22', 3),
(20, '2023-05-25 00:14:17', '2023-05-24 22:47:22', 3),
(21, '2023-05-30 01:14:15', '2023-05-30 17:14:15', 1),
(22, '2023-06-11 05:03:00', '2023-06-11 21:04:00', 1),
(23, '2023-08-26 05:08:00', '2023-08-27 21:08:00', 1),
(24, '2023-05-27 19:00:00', '2023-05-28 11:00:00', 3),
(25, '2023-05-28 19:09:00', '2023-05-29 11:09:00', 2);

-- --------------------------------------------------------

--
-- Структура таблицы `work_shift_users_user`
--

CREATE TABLE `work_shift_users_user` (
  `workShiftId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `work_shift_users_user`
--

INSERT INTO `work_shift_users_user` (`workShiftId`, `userId`) VALUES
(9, 5),
(9, 6),
(9, 7),
(9, 8),
(12, 6),
(12, 7),
(12, 8),
(12, 10),
(13, 5),
(13, 6),
(13, 7),
(13, 8),
(14, 6),
(14, 7),
(14, 8),
(15, 5),
(15, 6),
(15, 7),
(15, 8),
(16, 5),
(16, 6),
(16, 7),
(16, 8),
(17, 5),
(17, 6),
(17, 7),
(17, 8),
(17, 10),
(18, 5),
(18, 6),
(18, 7),
(18, 8),
(18, 10),
(19, 5),
(19, 6),
(19, 7),
(19, 8),
(19, 10),
(20, 5),
(20, 6),
(20, 7),
(20, 8),
(20, 10),
(21, 5),
(21, 6),
(21, 7),
(21, 8),
(21, 10),
(22, 8),
(22, 11),
(23, 5),
(23, 6),
(23, 7),
(23, 8),
(23, 9),
(23, 10),
(23, 11),
(24, 6),
(24, 8),
(24, 11),
(25, 5),
(25, 6),
(25, 7),
(25, 8),
(25, 10),
(25, 11);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `dish_item`
--
ALTER TABLE `dish_item`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_0dd6cc2092fa93d8642c74d63f5` (`shiftId`),
  ADD KEY `FK_f9f03fd5d3a40cbdacff9f0d7d3` (`cookedById`),
  ADD KEY `FK_3649176bbcf328227d02fbb8835` (`addedById`),
  ADD KEY `FK_3b6667bfe775fa39753ca6af2dc` (`statusId`);

--
-- Индексы таблицы `order_dishes`
--
ALTER TABLE `order_dishes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_874d4c6a3e239ed569650cc5132` (`orderId`),
  ADD KEY `FK_3886c8e5aa68a2e5d6b1d1ed233` (`dishId`);

--
-- Индексы таблицы `order_status`
--
ALTER TABLE `order_status`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `shift_status`
--
ALTER TABLE `shift_status`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `REL_9466682df91534dd95e4dbaa61` (`profileId`),
  ADD KEY `FK_c28e52f758e7bbc53828db92194` (`roleId`);

--
-- Индексы таблицы `user_profile`
--
ALTER TABLE `user_profile`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_79319cb91fbb4a1070ac6ee379e` (`roleId`);

--
-- Индексы таблицы `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `work_shift`
--
ALTER TABLE `work_shift`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_5f9e0e82261303d90985fb04ec5` (`statusId`);

--
-- Индексы таблицы `work_shift_users_user`
--
ALTER TABLE `work_shift_users_user`
  ADD PRIMARY KEY (`workShiftId`,`userId`),
  ADD KEY `IDX_ffec7fc05b5625089dc7ab6b23` (`workShiftId`),
  ADD KEY `IDX_11aa4adf5d05736bb8a825e90e` (`userId`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `dish_item`
--
ALTER TABLE `dish_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=178;

--
-- AUTO_INCREMENT для таблицы `order_dishes`
--
ALTER TABLE `order_dishes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- AUTO_INCREMENT для таблицы `order_status`
--
ALTER TABLE `order_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `shift_status`
--
ALTER TABLE `shift_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT для таблицы `user_profile`
--
ALTER TABLE `user_profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `user_role`
--
ALTER TABLE `user_role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `work_shift`
--
ALTER TABLE `work_shift`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `FK_0dd6cc2092fa93d8642c74d63f5` FOREIGN KEY (`shiftId`) REFERENCES `work_shift` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_3649176bbcf328227d02fbb8835` FOREIGN KEY (`addedById`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_3b6667bfe775fa39753ca6af2dc` FOREIGN KEY (`statusId`) REFERENCES `order_status` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_f9f03fd5d3a40cbdacff9f0d7d3` FOREIGN KEY (`cookedById`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Ограничения внешнего ключа таблицы `order_dishes`
--
ALTER TABLE `order_dishes`
  ADD CONSTRAINT `FK_3886c8e5aa68a2e5d6b1d1ed233` FOREIGN KEY (`dishId`) REFERENCES `dish_item` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_874d4c6a3e239ed569650cc5132` FOREIGN KEY (`orderId`) REFERENCES `order` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Ограничения внешнего ключа таблицы `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK_9466682df91534dd95e4dbaa616` FOREIGN KEY (`profileId`) REFERENCES `user_profile` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_c28e52f758e7bbc53828db92194` FOREIGN KEY (`roleId`) REFERENCES `user_role` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Ограничения внешнего ключа таблицы `user_profile`
--
ALTER TABLE `user_profile`
  ADD CONSTRAINT `FK_79319cb91fbb4a1070ac6ee379e` FOREIGN KEY (`roleId`) REFERENCES `user_role` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Ограничения внешнего ключа таблицы `work_shift`
--
ALTER TABLE `work_shift`
  ADD CONSTRAINT `FK_5f9e0e82261303d90985fb04ec5` FOREIGN KEY (`statusId`) REFERENCES `shift_status` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Ограничения внешнего ключа таблицы `work_shift_users_user`
--
ALTER TABLE `work_shift_users_user`
  ADD CONSTRAINT `FK_11aa4adf5d05736bb8a825e90e9` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_ffec7fc05b5625089dc7ab6b23e` FOREIGN KEY (`workShiftId`) REFERENCES `work_shift` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
