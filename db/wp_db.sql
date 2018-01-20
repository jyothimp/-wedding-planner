-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 20, 2018 at 05:28 AM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wp_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `wp_account`
--

CREATE TABLE `wp_account` (
  `ac_id` int(11) NOT NULL,
  `ac _no` varchar(60) NOT NULL,
  `ac_pin` int(11) NOT NULL,
  `ac_cardno` varchar(60) NOT NULL,
  `ac_balance` int(11) NOT NULL,
  `ac_status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `wp_address`
--

CREATE TABLE `wp_address` (
  `address_id` int(11) NOT NULL,
  `address_line1` varchar(100) NOT NULL,
  `address_line2` varchar(100) NOT NULL,
  `address_line3` varchar(100) NOT NULL,
  `address_city` varchar(100) NOT NULL,
  `address_pin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `wp_addtocart`
--

CREATE TABLE `wp_addtocart` (
  `cart_id` int(11) NOT NULL,
  `cart_login_id` int(11) NOT NULL,
  `cart_item_id` int(11) NOT NULL,
  `cart_item_type` tinyint(4) NOT NULL,
  `cart_quantity` int(11) NOT NULL DEFAULT '1',
  `cart_status` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wp_addtocart`
--

INSERT INTO `wp_addtocart` (`cart_id`, `cart_login_id`, `cart_item_id`, `cart_item_type`, `cart_quantity`, `cart_status`) VALUES
(12, 2, 6, 1, 1, 0),
(13, 2, 45, 1, 1, 0),
(14, 2, 2, 2, 1, 0),
(15, 2, 1, 3, 1, 0),
(16, 2, 5, 1, 1, 1),
(17, 2, 5, 1, 1, 1),
(18, 2, 5, 1, 1, 1),
(19, 2, 6, 1, 1, 0),
(20, 2, 22, 1, 1, 0),
(21, 2, 21, 1, 1, 0),
(22, 2, 9, 3, 1, 0),
(23, 2, 12, 1, 1, 1),
(24, 2, 12, 1, 1, 1),
(25, 2, 12, 1, 1, 1),
(26, 2, 12, 1, 1, 1),
(27, 2, 12, 1, 1, 1),
(28, 2, 12, 1, 1, 1),
(29, 2, 12, 1, 1, 1),
(30, 2, 10, 1, 1, 0),
(31, 2, 10, 1, 1, 0),
(32, 2, 10, 1, 1, 0),
(33, 2, 10, 1, 1, 0),
(34, 2, 9, 3, 1, 0),
(35, 2, 9, 3, 1, 0),
(36, 2, 9, 3, 1, 0),
(37, 2, 9, 3, 1, 0),
(38, 2, 2, 2, 1, 0),
(39, 2, 10, 1, 1, 0),
(40, 2, 10, 1, 1, 0),
(41, 2, 2, 2, 1, 0),
(42, 2, 2, 2, 1, 0),
(43, 2, 2, 2, 1, 0),
(44, 2, 2, 2, 1, 0),
(45, 2, 3, 2, 1, 0),
(46, 2, 2, 2, 1, 0),
(47, 2, 2, 2, 1, 0),
(48, 2, 2, 2, 1, 0),
(49, 2, 2, 2, 1, 0),
(50, 2, 10, 1, 1, 0),
(51, 2, 43, 1, 1, 0),
(52, 2, 43, 1, 1, 0),
(53, 2, 43, 1, 1, 0),
(54, 2, 10, 1, 1, 0),
(55, 2, 10, 1, 1, 0),
(56, 2, 10, 1, 1, 0),
(57, 2, 10, 1, 1, 0),
(58, 2, 9, 3, 1, 0),
(59, 2, 10, 1, 1, 0),
(60, 2, 9, 3, 1, 0),
(61, 2, 2, 2, 1, 0),
(62, 2, 2, 2, 1, 0),
(63, 2, 3, 2, 1, 0),
(64, 2, 2, 2, 1, 0),
(65, 2, 2, 2, 1, 0),
(66, 2, 2, 2, 1, 0),
(67, 2, 2, 2, 1, 0),
(68, 2, 3, 2, 1, 0),
(69, 2, 3, 2, 1, 0),
(70, 2, 2, 2, 1, 0),
(71, 2, 2, 2, 1, 0),
(72, 2, 2, 2, 1, 0),
(73, 2, 2, 2, 1, 0),
(74, 2, 2, 2, 1, 0),
(75, 2, 2, 2, 1, 0),
(76, 2, 2, 2, 1, 0),
(77, 2, 2, 2, 1, 0),
(78, 2, 2, 2, 1, 0),
(79, 2, 3, 2, 1, 0),
(80, 2, 3, 2, 1, 0),
(81, 2, 12, 2, 1, 1),
(82, 2, 12, 2, 1, 1),
(83, 2, 12, 2, 1, 1),
(84, 2, 3, 2, 1, 0),
(85, 2, 3, 2, 1, 0),
(86, 2, 11, 3, 1, 0),
(87, 2, 3, 2, 1, 0),
(88, 2, 3, 2, 1, 0),
(89, 2, 3, 2, 1, 0),
(90, 2, 3, 2, 1, 0),
(91, 2, 3, 2, 1, 0),
(92, 2, 12, 1, 1, 1),
(93, 2, 1, 3, 1, 0),
(94, 2, 1, 3, 1, 0),
(95, 2, 11, 3, 1, 0),
(96, 2, 1, 3, 1, 0),
(97, 2, 10, 1, 1, 0),
(98, 2, 11, 3, 1, 0),
(99, 2, 1, 3, 1, 0),
(100, 2, 1, 3, 1, 0),
(101, 2, 1, 3, 1, 0),
(102, 2, 1, 3, 1, 0),
(103, 2, 1, 3, 1, 0),
(104, 2, 1, 3, 150, 0),
(105, 2, 11, 3, 1000, 0),
(106, 2, 11, 3, 500, 0),
(107, 2, 11, 3, 50, 0),
(108, 2, 1, 3, 950, 0),
(109, 2, 1, 3, 550, 0),
(110, 2, 11, 3, 50, 0),
(111, 2, 11, 3, 50, 0),
(112, 2, 9, 3, 50, 0),
(113, 2, 9, 3, 900, 0),
(114, 2, 23, 1, 1, 0),
(115, 2, 38, 1, 1, 0),
(116, 5, 9, 1, 1, 0),
(117, 5, 1, 3, 50, 0),
(118, 5, 12, 1, 1, 1),
(119, 5, 11, 3, 50, 1),
(120, 5, 4, 2, 1, 0),
(121, 5, 9, 1, 1, 0),
(122, 5, 46, 1, 1, 1),
(123, 2, 9, 1, 1, 0),
(124, 2, 9, 1, 1, 0),
(125, 2, 52, 1, 1, 0),
(126, 2, 9, 1, 1, 0),
(127, 2, 3, 2, 1, 0),
(128, 7, 9, 1, 1, 0),
(129, 7, 3, 2, 1, 0),
(130, 2, 9, 1, 1, 0),
(131, 7, 3, 3, 50, 0),
(132, 2, 10, 1, 1, 0),
(133, 2, 4, 2, 1, 0),
(134, 2, 1, 3, 50, 0),
(135, 2, 19, 3, 50, 0),
(136, 2, 3, 3, 50, 0),
(137, 2, 3, 3, 50, 0),
(138, 2, 3, 3, 50, 0),
(139, 2, 9, 1, 1, 0),
(140, 2, 2, 2, 1, 0),
(141, 2, 1, 3, 50, 0),
(142, 2, 19, 3, 50, 0),
(143, 2, 9, 1, 1, 0),
(144, 2, 4, 2, 1, 0),
(145, 2, 15, 3, 50, 0),
(146, 2, 28, 3, 50, 0),
(147, 2, 3, 3, 50, 0),
(148, 2, 19, 3, 50, 0),
(149, 2, 9, 1, 1, 0),
(150, 2, 4, 2, 1, 0),
(151, 2, 15, 3, 50, 0),
(152, 2, 28, 3, 50, 0),
(153, 2, 3, 3, 50, 0),
(154, 2, 19, 3, 50, 0),
(155, 2, 9, 1, 1, 0),
(156, 2, 28, 3, 100, 0),
(157, 2, 15, 3, 50, 0),
(158, 2, 20, 3, 50, 0),
(159, 2, 21, 1, 1, 0),
(160, 2, 3, 2, 1, 0),
(161, 2, 13, 3, 200, 0),
(162, 2, 9, 1, 1, 0),
(163, 2, 9, 1, 1, 0),
(164, 2, 3, 2, 1, 1),
(165, 2, 19, 3, 1000, 1),
(166, 2, 30, 3, 250, 1),
(167, 2, 9, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `wp_bank`
--

CREATE TABLE `wp_bank` (
  `bank_id` varchar(60) NOT NULL,
  `bank_name` varchar(60) NOT NULL,
  `bank_ branch` varchar(60) NOT NULL,
  `bank_IFSCcode` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `wp_district`
--

CREATE TABLE `wp_district` (
  `district_id` int(11) NOT NULL,
  `district_name` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wp_district`
--

INSERT INTO `wp_district` (`district_id`, `district_name`) VALUES
(1, 'Kasaragod'),
(2, 'Kannur'),
(3, 'Wayanad'),
(4, 'Kozhikkode'),
(5, 'Malappuram'),
(6, 'Palakkad'),
(7, 'Thrissur'),
(8, 'Eranakulam'),
(9, 'Idukki'),
(10, 'Kottayam'),
(11, 'Alappuzha'),
(12, 'Pathanamthitta'),
(13, 'Kollam'),
(14, 'Thiruvanathapuram');

-- --------------------------------------------------------

--
-- Table structure for table `wp_food`
--

CREATE TABLE `wp_food` (
  `food_id` int(11) NOT NULL,
  `food_name` varchar(100) NOT NULL,
  `food_image` varchar(100) NOT NULL DEFAULT 'default.png',
  `food_description` varchar(100) NOT NULL,
  `food_price` int(11) NOT NULL,
  `food_status` tinyint(4) NOT NULL DEFAULT '1',
  `food_type` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wp_food`
--

INSERT INTO `wp_food` (`food_id`, `food_name`, `food_image`, `food_description`, `food_price`, `food_status`, `food_type`) VALUES
(1, 'Veg Biriyani', 'biriyani.png', 'items - Salad, Lemon pickle, Pappadam, Gopi manjuri', 120, 1, '1'),
(3, ' Chicken cutlet', 'chickencutlet.jpg', 'items - Cutlet , Tomato  sauce', 20, 1, '3'),
(7, 'meatroll', 'meatroll.jpg', 'ghgghgh', 25, 0, '2'),
(9, 'Kabsa', 'kabsa.jpg', 'items - Rice, Chicken', 200, 1, '2'),
(10, 'ghg', 'sadya.jpg', 'hhjhjh', 160, 0, '1'),
(13, 'Sadya', 'sadya.jpg', 'items - Rice, Sambar,Avial,Beatroot Pachadi,Kalan,Cabbage upperi, Rasam,Pappadam,Pazham, Ada pradama', 150, 1, '1'),
(15, 'Appam&veg curry', 'default.png', 'items - Palappam ,Stew', 75, 1, '1'),
(17, 'Meat roll', 'meatroll.jpg', 'hjhjhjhjhj', 15, 1, '3'),
(19, 'Vanilla flavour', 'vanilla.jpg', 'items - Vanilla', 75, 1, '4'),
(20, 'Strawberry flavour', 'strawberryjpg.jpg', 'items - Strawberry', 90, 1, '4'),
(21, 'Chocalate flavour', 'chocolate.jpg', 'items - Chocalate', 100, 1, '4'),
(22, 'Falooda', 'faluda.jpg', 'items - Pista flavour', 100, 1, '4'),
(23, 'Fruitsalad', 'fruitsalad.jpg', 'items - Strawberry, Pine apple, Grapes,Apple', 100, 1, '4'),
(24, 'Chicken roll', 'chickenroll.jpg', 'hjhjhjhjhjhjhjh', 20, 1, '3'),
(25, 'Idiyappam', 'idiyappamvegkuruma.jpg', 'items - idiyappam,Vegetable kuruma', 100, 1, '1'),
(26, 'Chappathi&veg curry', 'chappathigreenpeace.jpg', 'items - Chappathi, Greenpeace curry', 75, 1, '1'),
(27, 'Dosha', 'dosha.jpg', 'items - Dosha,Sambar, Chuttni,Pottatto curry', 80, 1, '1'),
(28, 'Fried Rice', 'friedrice.jpg', 'items - Rice,Chicken Fry, Chicken curry,Salad,Lemon pickle', 110, 1, '2'),
(29, 'Chappathi&chicken', 'chappathichicken.jpg', 'items - Chappathi , Chicken curry', 100, 1, '2'),
(30, 'Chicken biriyani', 'chickenbiriyani.jpg', 'items - Rice, Chicken curry, Beaf fry, Salad, Lemon pickle', 120, 1, '2'),
(31, 'Pathiri', 'pathirichicken.jpg', 'items - Pathiri, Chicken curry', 90, 1, '2'),
(32, 'Mattan Biriyani', 'muttonbiriyani.jpg', 'items - Rice,Mattan,Salad,Lemon pickle', 150, 1, '2'),
(33, 'Porotta&Beaf', 'porottabeaf.jpg', 'items - Porotta, Beaf curry', 100, 1, '2'),
(34, 'Beef cutlet', 'beafcutlet.jpg', 'items - Beaf cutlet, Soya sauce', 20, 1, '3'),
(35, 'Marble cake', 'marblecake.jpg', 'items - Cake, Milk coffee', 25, 1, '3'),
(36, 'Veg puffs', 'vegpuffs.jpg', 'items - Puffs,Tomato sauce', 25, 1, '3'),
(37, 'Chicken puffs', 'chickenpuffs.jpg', 'items - Puffs, Tomato sauce', 25, 1, '3'),
(38, 'Beef puffs', 'beefpuffs.jpg', 'items - Puffs, Soya sauce', 30, 1, '3'),
(39, 'Egg puffs', 'eggpuffs.jpg', 'items - Puffs,Soya sauce', 25, 1, '3');

-- --------------------------------------------------------

--
-- Table structure for table `wp_foodtype`
--

CREATE TABLE `wp_foodtype` (
  `foodtype_id` tinyint(4) NOT NULL,
  `foodtype_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wp_foodtype`
--

INSERT INTO `wp_foodtype` (`foodtype_id`, `foodtype_name`) VALUES
(1, 'Vegitarian'),
(2, 'Non-Vegitarian'),
(3, 'Snacks'),
(4, 'Ice creams');

-- --------------------------------------------------------

--
-- Table structure for table `wp_getforquotation`
--

CREATE TABLE `wp_getforquotation` (
  `quotation_id` int(11) NOT NULL,
  `quotation_user_id` int(11) NOT NULL,
  `quotation_date` date NOT NULL,
  `quotation_phone` varchar(50) NOT NULL,
  `quotation_location` int(11) NOT NULL,
  `quotation_venue` varchar(100) NOT NULL,
  `quotation_status` tinyint(4) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wp_getforquotation`
--

INSERT INTO `wp_getforquotation` (`quotation_id`, `quotation_user_id`, `quotation_date`, `quotation_phone`, `quotation_location`, `quotation_venue`, `quotation_status`, `created_at`) VALUES
(1, 2, '2017-11-25', '2147483647', 1, 'vp hall', 1, '2017-11-23 10:26:14'),
(2, 2, '2018-02-23', '9442345690', 19, 'Mundakkayam', 1, '2018-01-16 06:59:19'),
(3, 7, '2018-01-17', '8567897543', 9, 'jayasree auditorium', 1, '2018-01-16 08:48:32'),
(4, 2, '2018-01-19', '8547928540', 9, 'sreelakshmi auditorium', 1, '2018-01-18 08:30:40'),
(5, 2, '2018-01-28', '8547928540', 17, 'vp hall', 1, '2018-01-18 09:27:06'),
(6, 2, '2018-01-27', '8547928540', 7, 'qwerty', 1, '2018-01-20 03:06:15'),
(7, 2, '2018-01-26', '8547928540', 12, 'vp hall', 1, '2018-01-20 03:14:15'),
(8, 2, '2018-01-26', '9447108524', 17, 'sreelakshmi auditorium', 1, '2018-01-20 03:15:18'),
(9, 2, '2018-01-31', '9447108524', 21, 'uyuy', 1, '2018-01-20 03:17:12'),
(10, 2, '2018-01-26', '8547928540', 15, 'vp hall', 1, '2018-01-20 03:29:14'),
(11, 2, '2018-01-31', '8547928540', 9, 'jkjkjkjkjkjkj', 1, '2018-01-20 03:34:20'),
(12, 2, '2018-01-31', '8547928540', 7, 'hghghghghghghgh', 1, '2018-01-20 03:36:47'),
(13, 2, '2018-01-25', '8547928540', 8, 'wertyui', 1, '2018-01-20 03:41:52'),
(14, 2, '2018-01-31', '8547928540', 3, 'hjhjhjhjhjhj', 1, '2018-01-20 03:44:42'),
(15, 2, '2018-01-31', '8547928540', 7, 'hghghghghghghgh', 1, '2018-01-20 03:47:03'),
(16, 2, '2018-01-30', '8547928540', 13, 'hghghghghghghgh', 1, '2018-01-20 03:51:37'),
(17, 2, '2018-01-31', '8547928540', 21, 'wertyuiol', 1, '2018-01-20 03:56:22'),
(18, 2, '2018-01-26', '8547928540', 23, 'sdfghjkl;', 1, '2018-01-20 03:59:18'),
(19, 2, '2018-01-31', '8547928540', 25, 'efghjkl', 1, '2018-01-20 04:00:15'),
(20, 2, '2018-01-31', '8547928540', 23, 'wethhj', 1, '2018-01-20 04:01:36'),
(21, 2, '2018-01-30', '8547928540', 1, 'hghghghghghghgh', 1, '2018-01-20 04:07:48'),
(22, 2, '2018-01-30', '8547928540', 1, 'hghghghghghghgh', 1, '2018-01-20 04:09:56'),
(23, 2, '2018-01-31', '8547928540', 25, 'efghjkl', 1, '2018-01-20 04:11:49'),
(24, 2, '2018-01-31', '8547928540', 25, 'efghjkl', 1, '2018-01-20 04:12:25'),
(25, 2, '2018-01-29', '8547928540', 23, 'vp hall', 1, '2018-01-20 04:22:31');

-- --------------------------------------------------------

--
-- Table structure for table `wp_hall`
--

CREATE TABLE `wp_hall` (
  `hall_id` int(11) NOT NULL,
  `hall_name` varchar(60) NOT NULL,
  `hall_image` varchar(60) NOT NULL,
  `hall_description` varchar(100) NOT NULL,
  `hall_price` int(11) NOT NULL,
  `hall_status` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wp_hall`
--

INSERT INTO `wp_hall` (`hall_id`, `hall_name`, `hall_image`, `hall_description`, `hall_price`, `hall_status`) VALUES
(2, 'Hall1', 'h1.jpg', 'hhghghghg', 10000, 1),
(3, 'Hall2', 'h2.jpg', 'vgfgfgfgfgffg', 11000, 1),
(4, 'Hall3', 'h3.jpg', 'hghghghg', 9000, 1),
(5, 'Hall4', 'h4.jpg', 'hghhjfhgjfhgjh', 12000, 1);

-- --------------------------------------------------------

--
-- Table structure for table `wp_item_types`
--

CREATE TABLE `wp_item_types` (
  `item_id` int(11) NOT NULL,
  `item_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wp_item_types`
--

INSERT INTO `wp_item_types` (`item_id`, `item_name`) VALUES
(1, 'Stage'),
(2, 'Hall'),
(3, 'Food');

-- --------------------------------------------------------

--
-- Table structure for table `wp_location`
--

CREATE TABLE `wp_location` (
  `location_id` int(11) NOT NULL,
  `location_name` varchar(60) NOT NULL,
  `district_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wp_location`
--

INSERT INTO `wp_location` (`location_id`, `location_name`, `district_id`) VALUES
(1, 'Manjeri', 5),
(2, 'Nilambur', 5),
(3, 'Payyanur', 2),
(4, 'Thalassery', 2),
(5, 'Kanhangad', 1),
(6, 'Nileshwar', 1),
(7, 'Pulpally', 3),
(8, 'vellamunda', 3),
(9, 'Vadakara', 4),
(10, 'Mavoor', 4),
(11, 'Pattambi', 6),
(12, 'Mannarkkad', 6),
(13, 'Guruvayur', 7),
(14, 'Angamali', 7),
(15, 'Aluva', 8),
(16, 'Kochi', 8),
(17, 'Kattappana', 9),
(18, 'Munnar', 9),
(19, 'Kanjirappalli', 10),
(20, 'Ponkunnam', 10),
(21, 'Cherthala', 11),
(22, 'Kayamkulam', 11),
(23, 'Ranni', 12),
(24, 'Thiruvalla', 12),
(25, 'Paravur', 13),
(26, 'Kottarakkara', 13),
(27, 'Neyyattinkara', 14),
(28, 'Attingal', 14);

-- --------------------------------------------------------

--
-- Table structure for table `wp_login`
--

CREATE TABLE `wp_login` (
  `login_id` int(11) NOT NULL,
  `login_username` varchar(30) NOT NULL,
  `login_password` varchar(60) NOT NULL,
  `login_reset_password` varchar(100) DEFAULT NULL,
  `login_status` tinyint(4) NOT NULL DEFAULT '1',
  `login_role` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wp_login`
--

INSERT INTO `wp_login` (`login_id`, `login_username`, `login_password`, `login_reset_password`, `login_status`, `login_role`) VALUES
(1, 'admin', '7c4a8d09ca3762af61e59520943dc26494f8941b', NULL, 1, 0),
(2, 'jyothi', '505bc638b0405124488a91af0956be013a8f73ca', NULL, 1, 1),
(3, 'shimi', '0f32eacdc046b2e9038b398d2c08f896b7147b10', NULL, 1, 1),
(4, 'surya09', '7c4a8d09ca3762af61e59520943dc26494f8941b', NULL, 1, 1),
(5, 'aneena', 'e258388b2da84550344faeb268222663511335d1', NULL, 1, 1),
(6, 'john', 'a51dda7c7ff50b61eaea0444371f4a6a9301e501', NULL, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `wp_payment`
--

CREATE TABLE `wp_payment` (
  `pay_id` int(11) NOT NULL,
  `paymenttypes` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `wp_registration`
--

CREATE TABLE `wp_registration` (
  `registration_id` int(11) NOT NULL,
  `login_id` int(11) NOT NULL,
  `registration_name` varchar(30) NOT NULL,
  `registration_address` varchar(500) NOT NULL,
  `registration_phone` varchar(10) NOT NULL,
  `registration_email` varchar(50) NOT NULL,
  `registration_status` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wp_registration`
--

INSERT INTO `wp_registration` (`registration_id`, `login_id`, `registration_name`, `registration_address`, `registration_phone`, `registration_email`, `registration_status`) VALUES
(1, 1, 'Admin', 'hhjhjhjhhjhh', '9876543456', 'admin@gmail.com', 1),
(2, 2, 'jyothi john', 'hghftttfftftftf', '8796554678', 'jyothijohnmp@gmail.com', 1),
(3, 3, 'shimi joseph', 'jhhhhhghghjhjhj', '8976543567', 'shimijoseph@mca.ajce.in', 1),
(4, 4, 'surya sunder', 'rtyuyiuytfyugyyyuuuuiiii', '8899776655', 'chgvjhbgk@hg.bik', 1),
(5, 5, 'aneena anna', 'MARUTHIPPARAMBIL', '9876543209', 'aneena@gmail.com', 1),
(7, 7, 'john ', 'anugraham, koovapally po,kanjirapalli', '8765432331', 'johntj@gmail.com', 1);

-- --------------------------------------------------------

--
-- Table structure for table `wp_stage`
--

CREATE TABLE `wp_stage` (
  `stage_id` int(11) NOT NULL,
  `stage_name` varchar(60) NOT NULL,
  `stage_image` varchar(60) NOT NULL,
  `stage_description` varchar(1000) NOT NULL,
  `stage_price` int(11) NOT NULL,
  `stage_status` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wp_stage`
--

INSERT INTO `wp_stage` (`stage_id`, `stage_name`, `stage_image`, `stage_description`, `stage_price`, `stage_status`) VALUES
(6, 'Stage6', '6.jpg', 'hjyrttyyuyuy', 13000, 0),
(7, 'Stage7', '7.jpg', 'gffgfhhgh', 10000, 0),
(8, 'Stage8', '9.jpg', 'hghrrrewrer', 12000, 0),
(9, 'Stage1', '10.jpg', 'Maroon and white combination of curtons and flowers. ', 4000, 1),
(10, 'Stage2', '11.jpg', 'White and red combination of cloths and flowers.', 13000, 1),
(11, 'Stage11', '12.jpg', 'gfrsesswsdcgvvvgv', 14000, 0),
(21, 'Stage3', '20.jpg', 'Cream cloth and red color flowers combination', 7000, 1),
(22, 'Stage4', '14.jpg', 'White cloth and red and white flower combination', 7800, 1),
(23, 'Stage5', '17.jpg', 'White and red combination of cloths and flowers', 7890, 1),
(27, 'sg66', '18.jpg', 'hjhhijkjjkjkjjjbbhbhbhbhbhbhbvh', 7890, 0),
(33, 'sg2', '18.jpg', 'jhjhjhjhjhjh', 4567, 0),
(37, 'sg1', '12.jpg', 'hjhjhjhjhjh', 5200, 0),
(38, 'stg2', '9.jpg', 'fhghghghghghg', 4500, 1),
(40, 'sg3', '13.jpg', 'jhgjhjhj', 3500, 0),
(41, 'stage22', '10.jpg', 'jhfjhjhj', 8000, 0),
(44, 'stage23', '18.jpg', 'hgjjkhjhjh', 7800, 1),
(52, 'stage21', '12.jpg', 'tftyu jhagshgjsg lhlkh', 5000, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `wp_account`
--
ALTER TABLE `wp_account`
  ADD PRIMARY KEY (`ac_id`);

--
-- Indexes for table `wp_address`
--
ALTER TABLE `wp_address`
  ADD PRIMARY KEY (`address_id`);

--
-- Indexes for table `wp_addtocart`
--
ALTER TABLE `wp_addtocart`
  ADD PRIMARY KEY (`cart_id`);

--
-- Indexes for table `wp_district`
--
ALTER TABLE `wp_district`
  ADD PRIMARY KEY (`district_id`);

--
-- Indexes for table `wp_food`
--
ALTER TABLE `wp_food`
  ADD PRIMARY KEY (`food_id`),
  ADD UNIQUE KEY `food_name` (`food_name`);

--
-- Indexes for table `wp_foodtype`
--
ALTER TABLE `wp_foodtype`
  ADD PRIMARY KEY (`foodtype_id`);

--
-- Indexes for table `wp_getforquotation`
--
ALTER TABLE `wp_getforquotation`
  ADD PRIMARY KEY (`quotation_id`);

--
-- Indexes for table `wp_hall`
--
ALTER TABLE `wp_hall`
  ADD PRIMARY KEY (`hall_id`),
  ADD UNIQUE KEY `hall_name` (`hall_name`);

--
-- Indexes for table `wp_item_types`
--
ALTER TABLE `wp_item_types`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `wp_location`
--
ALTER TABLE `wp_location`
  ADD PRIMARY KEY (`location_id`);

--
-- Indexes for table `wp_login`
--
ALTER TABLE `wp_login`
  ADD PRIMARY KEY (`login_id`);

--
-- Indexes for table `wp_payment`
--
ALTER TABLE `wp_payment`
  ADD PRIMARY KEY (`pay_id`);

--
-- Indexes for table `wp_registration`
--
ALTER TABLE `wp_registration`
  ADD PRIMARY KEY (`registration_id`);

--
-- Indexes for table `wp_stage`
--
ALTER TABLE `wp_stage`
  ADD PRIMARY KEY (`stage_id`),
  ADD UNIQUE KEY `stage_name` (`stage_name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `wp_account`
--
ALTER TABLE `wp_account`
  MODIFY `ac_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `wp_address`
--
ALTER TABLE `wp_address`
  MODIFY `address_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `wp_addtocart`
--
ALTER TABLE `wp_addtocart`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=168;
--
-- AUTO_INCREMENT for table `wp_district`
--
ALTER TABLE `wp_district`
  MODIFY `district_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `wp_food`
--
ALTER TABLE `wp_food`
  MODIFY `food_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
--
-- AUTO_INCREMENT for table `wp_getforquotation`
--
ALTER TABLE `wp_getforquotation`
  MODIFY `quotation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT for table `wp_hall`
--
ALTER TABLE `wp_hall`
  MODIFY `hall_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT for table `wp_location`
--
ALTER TABLE `wp_location`
  MODIFY `location_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
--
-- AUTO_INCREMENT for table `wp_login`
--
ALTER TABLE `wp_login`
  MODIFY `login_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `wp_payment`
--
ALTER TABLE `wp_payment`
  MODIFY `pay_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `wp_registration`
--
ALTER TABLE `wp_registration`
  MODIFY `registration_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `wp_stage`
--
ALTER TABLE `wp_stage`
  MODIFY `stage_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
