-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 19, 2017 at 05:23 AM
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
-- Table structure for table `wp_food`
--

CREATE TABLE `wp_food` (
  `food_id` int(11) NOT NULL,
  `foodtype_id` int(11) NOT NULL,
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

INSERT INTO `wp_food` (`food_id`, `foodtype_id`, `food_name`, `food_image`, `food_description`, `food_price`, `food_status`, `food_type`) VALUES
(1, 0, 'ABC', 'default.png', 'jghghgjhgjhgjgjhg', 522, 1, '1'),
(2, 0, 'nnhhh', 'biriyani.png', 'hjhjjjhjh', 7500, 1, '2'),
(3, 3, 'cutlet', 'cutlet.jpg', 'ghjfhgjfhjh', 15, 1, '3'),
(4, 0, 'Abc', '2017-04-18.png', 'wwewe', 5000, 0, '2'),
(5, 0, 'Biriyani', 'Screenshot (18).png', 'ysgdagsdjas', 85, 0, '2');

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
(1, 'Vegitarian');

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
  `hall_status` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wp_hall`
--

INSERT INTO `wp_hall` (`hall_id`, `hall_name`, `hall_image`, `hall_description`, `hall_price`, `hall_status`) VALUES
(2, 'Hall1', 'h1.jpg', 'hhghghghg', 10000, 1),
(3, 'Hall2', 'h2.jpg', 'vgfgfgfgfgffg', 11000, 1),
(4, 'Hall3', 'h3.jpg', 'hghghghg', 9000, 1),
(5, 'Hall4', 'h4.jpg', 'hghhjfhgjfhgjh', 12000, 1),
(11, 'yy', 'h12.jpg', 'hghg', 7777, 1),
(12, 'h', 'h10.jpg', 'jkjk', 8888, 1),
(13, 'fii', 'h12.jpg', 'jkjj', 4567, 0),
(14, 'bbb', 'h11.jpg', 'hghhg', 7600, 1),
(15, 'hhjh', 'h9.jpg', 'hhjhjhjnnbnn', 6000, 1);

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
(2, 'admin', '123456', 1, 0),
(3, 'jyothi', 'jyothi', 1, 1),
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
(26, 'jinu', 'jinumol', 1, 1),
(27, 'job', 'jobin', 1, 1),
(28, 'jiya', 'jiyajiya', 1, 1),
(29, 'neethu', 'neethu', 1, 1),
(30, 'neethu', 'neethu', 1, 1),
(31, 'neethu', 'neethu', 1, 1),
(32, 'surya', '768768', 1, 1),
(33, 'alfi', 'alfina', 1, 1),
(35, 'alfi', 'alfina', 1, 1);

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
  `registration_phone` varchar(10) NOT NULL,
  `registration_email` varchar(50) NOT NULL,
  `registration_status` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wp_registration`
--

INSERT INTO `wp_registration` (`registration_id`, `login_id`, `registration_name`, `registration_address`, `registration_phone`, `registration_email`, `registration_status`) VALUES
(1, 19, 'Amal Jyothi', 'akjshdjasdjghashdg', '2147483647', 'amalkjose324@gmail.com', 1),
(2, 19, 'Amal Jyothi', 'akjshdjasdjghashdg', '2147483647', 'amalkjose324@gmail.com', 1),
(3, 20, 'Amal Jyothi', 'akjshdjasdjghashdg', '2147483647', 'amalkjose324@gmail.com', 1),
(4, 21, 'jilu', 'hjhjhjh', '2147483647', 'jilu@gmail.com', 1),
(5, 22, 'jhjh', 'yutuytyujgjgjgj', '2147483647', 'mmm@kkk.iiii', 1),
(6, 23, 'jyothi john2', '12123312', '2147483647', '', 1),
(7, 24, 'meenu', 'maruthipparambil', '2147483647', 'me@gmail.com', 1),
(8, 25, 'anju', 'yuyuyjkjkjkjhjghghghg', '2147483647', 'an@gmail.com', 1),
(9, 26, 'jinu', 'hjhjhjlopoggg', '2147483647', 'jinu@gmail.com', 1),
(10, 27, 'jobin', 'bjjhjhjhjhjhjhjh', '2147483647', 'jobin@gmail.com', 1),
(11, 28, 'jiya', 'yyyuuyuykjkjkjkj', '2147483647', 'jiya@gmail.com', 1),
(12, 29, 'neethu', 'jhhjhjhjjjjjkjk', '2147483647', 'neethu@gmail.com', 1),
(13, 29, 'neethu', 'jhhjhjhjjjjjkjk', '2147483647', 'neethu@gmail.com', 1),
(14, 30, 'neethu', 'jhhjhjhjjjjjkjk', '2147483647', 'neethu@gmail.com', 1),
(15, 29, 'neethu', 'jhhjhjhjjjjjkjk', '2147483647', 'neethu@gmail.com', 1),
(16, 30, 'neethu', 'jhhjhjhjjjjjkjk', '2147483647', 'neethu@gmail.com', 1),
(17, 31, 'neethu', 'jhhjhjhjjjjjkjk', '2147483647', 'neethu@gmail.com', 1),
(18, 32, 'surya', 'hghghghghg', '9876543421', 'su@gmail.com', 1),
(19, 33, 'alfina', 'hghhhghgjhjhjhjhjhjhj90909', '9807654345', 'alfi@gmail.com', 1),
(20, 33, 'alfina', 'hghhhghgjhjhjhjhjhjhj90909', '9807654345', 'alfi@gmail.com', 1),
(21, 34, 'alfina', 'hghhhghgjhjhjhjhjhjhj90909', '9807654345', 'alfi@gmail.com', 1),
(22, 33, 'alfina', 'hghhhghgjhjhjhjhjhjhj90909', '9807654345', 'alfi@gmail.com', 1),
(23, 35, 'alfina', 'hghhhghgjhjhjhjhjhjhj90909', '9807654345', 'alfi@gmail.com', 1);

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
(1, 'Stage1', '1.jpg', 'Each wedding stage is customized for different couples and their tastes and opinions are incorporated in the design. Based on budget and colour preferences, the wedding stage decoration will be customized. Images below show a few of the stages done by us for our customers.', 8000, 0),
(2, 'Stage2', '2.jpg', 'tsiadgajgjhasgdjhgasdbajh jgjhgwjd wjhdgwjhdg wdjehfwjd gjwhebdj ', 10000, 0),
(3, 'ajnskjhsd', '7.jpg', 'hjhjhjhjjhjhj', 9000, 0),
(4, 'Stage', '7.jpg', 'hjhjhjhjhj', 12000, 1),
(5, 'Stage5', '5.jpg', 'jhjhjhjh', 11000, 1),
(6, 'Stage6', '6.jpg', 'hjyrttyyuyuy', 13000, 1),
(7, 'Stage7', '7.jpg', 'gffgfhhgh', 10000, 0),
(8, 'Stage8', '9.jpg', 'hghrrrewrer', 12000, 1),
(9, 'Stage9', '10.jpg', 'bhdeseseses', 14000, 1),
(10, 'Stage10', '11.jpg', 'vgtfrdrddeses', 13000, 1),
(11, 'Stage11', '12.jpg', 'gfrsesswsdcgvvvgv', 14000, 1),
(12, 'Stage12', '13.jpg', 'gcfwfgsvgvcgvgv', 15000, 1),
(21, 'stage20', '20.jpg', 'hjhjh', 7000, 1),
(22, 'Stage13', '14.jpg', 'jhjh', 7800, 1),
(23, 'StageABC', '17.jpg', 'jjkjkj', 7890, 1),
(27, 'sg66', '18.jpg', 'hjhhijkjjkjkjjjbbhbhbhbhbhbhbvh', 7890, 0),
(33, 'sg2', '18.jpg', 'jhjhjhjhjhjh', 4567, 0),
(34, '', '7.jpg', '', 7800, 0),
(35, 'joooo', '4.jpg', 'jhjhjh', 6780, 0),
(36, 'bbb', '5.jpg', 'hjhjhj', 4500, 0),
(37, 'sg1', '12.jpg', 'hjhjhjhjhjh', 5200, 1);

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
-- Indexes for table `wp_food`
--
ALTER TABLE `wp_food`
  ADD PRIMARY KEY (`food_id`);

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
-- AUTO_INCREMENT for table `wp_food`
--
ALTER TABLE `wp_food`
  MODIFY `food_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `wp_getforquotation`
--
ALTER TABLE `wp_getforquotation`
  MODIFY `quotation_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `wp_hall`
--
ALTER TABLE `wp_hall`
  MODIFY `hall_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
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
  MODIFY `login_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
--
-- AUTO_INCREMENT for table `wp_package`
--
ALTER TABLE `wp_package`
  MODIFY `package_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `wp_registration`
--
ALTER TABLE `wp_registration`
  MODIFY `registration_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `wp_stage`
--
ALTER TABLE `wp_stage`
  MODIFY `stage_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
