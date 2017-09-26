-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 26, 2017 at 01:40 PM
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
  `cart_quantity` int(11) NOT NULL,
  `cart_cost` float NOT NULL,
  `cart_status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `wp_district`
--

CREATE TABLE `wp_district` (
  `district_id` int(11) NOT NULL,
  `district_name` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `wp_getforquotation`
--

CREATE TABLE `wp_getforquotation` (
  `quotation_id` int(11) NOT NULL,
  `quotation_registration_id` int(11) NOT NULL,
  `quotation_item_id` int(11) NOT NULL,
  `quotation_religion` varchar(60) NOT NULL,
  `quotation_date` date NOT NULL,
  `quotation_time` time NOT NULL,
  `quotation_phone` int(11) NOT NULL,
  `quotation_address_id` int(11) NOT NULL,
  `quotation_location` varchar(100) NOT NULL,
  `quotation_status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  `hall_status` tinyint(4) NOT NULL
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
-- Table structure for table `wp_item`
--

CREATE TABLE `wp_item` (
  `item_id` int(11) NOT NULL,
  `item_package_id` int(11) NOT NULL,
  `item_description` varchar(100) NOT NULL,
  `item_rate` int(11) NOT NULL,
  `item_status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `wp_location`
--

CREATE TABLE `wp_location` (
  `location_id` int(11) NOT NULL,
  `district_name` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `wp_login`
--

CREATE TABLE `wp_login` (
  `login_id` int(11) NOT NULL,
  `login_username` varchar(30) NOT NULL,
  `login_password` varchar(60) NOT NULL,
  `login_status` tinyint(4) NOT NULL DEFAULT '1',
  `login_role` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wp_login`
--

INSERT INTO `wp_login` (`login_id`, `login_username`, `login_password`, `login_status`, `login_role`) VALUES
(1, 'amal', 'jyothi', 1, 1),
(2, 'admin', '123', 1, 0),
(3, 'jyothi', 'jo', 1, 1),
(4, 'amal', '768768', 1, 1),
(5, 'aneena', '768768', 1, 1),
(6, 'jhjhjh', '768768', 1, 1),
(7, 'geethu', 'geethu', 1, 1),
(8, '', '768768', 1, 1),
(9, '', '768768', 1, 1),
(10, 's', 's', 1, 1),
(11, 'aneesha', 'aneesha', 1, 1),
(12, 'aneesha', 'aneesha', 1, 1),
(13, 'angel', 'angel', 1, 1),
(14, 'maria', 'maria', 1, 1),
(15, 'ammu', 'ammu', 1, 1),
(16, 'ammu', 'ammu', 1, 1),
(17, 'jyothi222', '7894561230', 1, 1),
(18, 'jyothi222', '7894561230', 1, 1),
(19, 'aj', '123456', 1, 1),
(20, 'aj', '123456', 1, 1),
(21, 'jilu', 'jilu', 1, 1),
(22, 'hgvhg', '768768', 1, 1),
(23, 'jyothi1111', '76876822', 1, 1),
(24, 'meenu', 'meenuponnu', 1, 1),
(25, 'anju', 'anjumtom', 1, 1),
(26, 'jinu', 'jinumol', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `wp_package`
--

CREATE TABLE `wp_package` (
  `package_id` int(11) NOT NULL,
  `package_packagename` varchar(60) NOT NULL,
  `package_status` tinyint(4) NOT NULL
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
  `registration_phone` int(11) NOT NULL,
  `registration_email` varchar(50) NOT NULL,
  `registration_status` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wp_registration`
--

INSERT INTO `wp_registration` (`registration_id`, `login_id`, `registration_name`, `registration_address`, `registration_phone`, `registration_email`, `registration_status`) VALUES
(1, 19, 'Amal Jyothi', 'akjshdjasdjghashdg', 2147483647, 'amalkjose324@gmail.com', 1),
(2, 19, 'Amal Jyothi', 'akjshdjasdjghashdg', 2147483647, 'amalkjose324@gmail.com', 1),
(3, 20, 'Amal Jyothi', 'akjshdjasdjghashdg', 2147483647, 'amalkjose324@gmail.com', 1),
(4, 21, 'jilu', 'hjhjhjh', 2147483647, 'jilu@gmail.com', 1),
(5, 22, 'jhjh', 'yutuytyujgjgjgj', 2147483647, 'mmm@kkk.iiii', 1),
(6, 23, 'jyothi john2', '12123312', 2147483647, '', 1),
(7, 24, 'meenu', 'maruthipparambil', 2147483647, 'me@gmail.com', 1),
(8, 25, 'anju', 'yuyuyjkjkjkjhjghghghg', 2147483647, 'an@gmail.com', 1),
(9, 26, 'jinu', 'hjhjhjlopoggg', 2147483647, 'jinu@gmail.com', 1);

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
(1, 'Stage1', '1.jpg', 'Each wedding stage is customized for different couples and their tastes and opinions are incorporated in the design. Based on budget and colour preferences, the wedding stage decoration will be customized. Images below show a few of the stages done by us for our customers.', 8000, 1),
(2, 'Stage2', '2.jpg', 'tsiadgajgjhasgdjhgasdbajh jgjhgwjd wjhdgwjhdg wdjehfwjd gjwhebdj ', 10000, 1),
(3, 'Stage3', '3.jpg', 'hjhjhjhjjhjhj', 9000, 1),
(4, 'Stage4', '4.jpg', 'hjhjhjhjhj', 12000, 1),
(5, 'Stage5', '5.jpg', 'jhjhjhjh', 11000, 1),
(6, 'Stage6', '6.jpg', 'hjyrttyyuyuy', 13000, 1),
(7, 'Stage7', '7.jpg', 'gffgfhhgh', 10000, 1),
(8, 'Stage8', '9.jpg', 'hghrrrewrer', 12000, 1),
(9, 'Stage9', '10.jpg', 'bhdeseseses', 14000, 1),
(10, 'Stage10', '11.jpg', 'vgtfrdrddeses', 13000, 1),
(11, 'Stage11', '12.jpg', 'gfrsesswsdcgvvvgv', 14000, 1),
(12, 'Stage12', '13.jpg', 'gcfwfgsvgvcgvgv', 15000, 1);

--
-- Indexes for dumped tables
--

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
-- Indexes for table `wp_getforquotation`
--
ALTER TABLE `wp_getforquotation`
  ADD PRIMARY KEY (`quotation_id`);

--
-- Indexes for table `wp_hall`
--
ALTER TABLE `wp_hall`
  ADD PRIMARY KEY (`hall_id`);

--
-- Indexes for table `wp_item`
--
ALTER TABLE `wp_item`
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
-- Indexes for table `wp_package`
--
ALTER TABLE `wp_package`
  ADD PRIMARY KEY (`package_id`);

--
-- Indexes for table `wp_registration`
--
ALTER TABLE `wp_registration`
  ADD PRIMARY KEY (`registration_id`);

--
-- Indexes for table `wp_stage`
--
ALTER TABLE `wp_stage`
  ADD PRIMARY KEY (`stage_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `wp_address`
--
ALTER TABLE `wp_address`
  MODIFY `address_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `wp_addtocart`
--
ALTER TABLE `wp_addtocart`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `wp_district`
--
ALTER TABLE `wp_district`
  MODIFY `district_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `wp_getforquotation`
--
ALTER TABLE `wp_getforquotation`
  MODIFY `quotation_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `wp_hall`
--
ALTER TABLE `wp_hall`
  MODIFY `hall_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `wp_item`
--
ALTER TABLE `wp_item`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `wp_location`
--
ALTER TABLE `wp_location`
  MODIFY `location_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `wp_login`
--
ALTER TABLE `wp_login`
  MODIFY `login_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT for table `wp_package`
--
ALTER TABLE `wp_package`
  MODIFY `package_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `wp_registration`
--
ALTER TABLE `wp_registration`
  MODIFY `registration_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `wp_stage`
--
ALTER TABLE `wp_stage`
  MODIFY `stage_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
