-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sty 17, 2024 at 04:21 AM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tindb`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `game`
--

CREATE TABLE `game` (
  `gameID` int(11) NOT NULL,
  `title` varchar(20) NOT NULL,
  `price` int(11) NOT NULL,
  `release_date` date NOT NULL,
  `type` varchar(15) NOT NULL,
  `age_limit` int(11) NOT NULL,
  `descr` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `game`
--

INSERT INTO `game` (`gameID`, `title`, `price`, `release_date`, `type`, `age_limit`, `descr`) VALUES
(1, 'GTA V', 30, '2013-09-17', 'Action Adventur', 18, 'Odkryj fikcyjny stan San Andreas w epickiej grze o przestępczości.'),
(2, 'FIFA 24', 60, '2024-10-01', 'Sport', 3, 'Doświadcz najnowszej odsłony popularnej serii symulacji piłki nożnej FIFA.'),
(3, 'UFC 5', 50, '2023-06-15', 'Bijatyka', 18, 'Wejdź do oktagonu i poczuj emocje walki w UFC.'),
(4, 'COD MW2', 40, '2009-11-10', 'FPS', 18, 'Weź udział w intensywnej i filmowej akcji w Call of Duty: Modern Warfare 2.'),
(5, 'Metin2', 0, '2004-01-27', 'MMORPG', 12, 'Rozpocznij podróż w fantastycznym świecie Metin2.'),
(6, 'Dying Light', 50, '2015-01-27', 'Survival Horror', 18, 'Przeżyj w postapokaliptycznym świecie pełnym zombie.'),
(7, 'Forza H4', 60, '2018-10-02', 'Wyścigi', 3, 'Ścigaj się przez piękne krajobrazy w najbardziej rozbudowanej grze wyścigowej.'),
(8, 'Minecraft', 30, '2011-11-18', 'Sandbox', 10, 'Buduj i odkrywaj swój własny klockowy świat pełen kreatywności.'),
(9, 'GTA 3', 20, '2001-10-22', 'Action Adventur', 18, 'Przeżyj gangsterskie ulice Liberty City w Grand Theft Auto 3.'),
(11, 'Rocket League', 25, '2015-07-07', 'Sports', 3, 'Połącz piłkę nożną z samochodami z napędem rakietowym, aby uzyskać unikalne doświadczenie gry.'),
(12, 'Wiedźmin 2', 20, '2011-05-17', 'Action RPG', 18, 'Kontynuuj podróż Geralta z Rivii w tej mrocznej i wciągającej grze fabularnej.'),
(13, 'LoL', 0, '2009-10-27', 'MOBA', 12, 'Dołącz do rozwijającej się areny walki i rywalizuj w intensywnych meczach wieloosobowych.'),
(14, 'Battlefield V', 40, '2018-11-20', 'FPS', 18, 'Przeżyj II wojnę światową w tej pełnej akcji strzelance pierwszoosobowej.'),
(15, 'Stardew Valley', 15, '2016-02-26', 'Sandbox', 3, 'Zarządzaj swoją farmą i ciesz się spokojnym życiem w tej urokliwej grze rolniczej.');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `orders`
--

CREATE TABLE `orders` (
  `orderID` int(11) NOT NULL,
  `order_date` date NOT NULL,
  `userID` int(11) NOT NULL,
  `gameID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`orderID`, `order_date`, `userID`, `gameID`) VALUES
(14, '2024-01-01', 2, 1),
(15, '2024-01-30', 3, 7),
(16, '2024-01-03', 17, 9),
(17, '2024-01-16', 29, 15),
(18, '2024-01-14', 8, 8),
(19, '2024-01-21', 12, 5),
(20, '2023-12-06', 8, 13),
(21, '2023-12-01', 14, 12),
(22, '2024-01-07', 3, 6),
(23, '2023-11-10', 18, 9),
(24, '2024-01-12', 4, 4),
(25, '2024-01-14', 4, 2);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user`
--

CREATE TABLE `user` (
  `userID` int(11) NOT NULL,
  `name` varchar(15) NOT NULL,
  `surname` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `login` varchar(15) NOT NULL,
  `password` varchar(20) NOT NULL,
  `permission` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userID`, `name`, `surname`, `email`, `login`, `password`, `permission`) VALUES
(1, 'Piotr', 'Pioro', 'piot600@o2.pl', 'admin', 'admin', ''),
(2, 'Anna', 'Nowak', 'anna123@gmail.com', 'anna', 'password123', 'user'),
(3, 'Jan', 'Kowalski', 'jan456@yahoo.com', 'jan', 'securepass', 'user'),
(4, 'Ewa', 'Wiśniewska', 'ewa789@gmail.com', 'ewa', 'ewapass', 'user'),
(8, 'Monika', 'Górska', 'monika789@gmail.com', 'monika', 'gorska123', 'user'),
(9, 'Paweł', 'Szymański', 'pawel456@gmail.com', 'pawel', 'pawelpass', 'user'),
(10, 'Natalia', 'Duda', 'natalia789@yahoo.com', 'natalia', 'dudapass', 'user'),
(11, 'Rafał', 'Olejnik', 'rafal456@gmail.com', 'rafal', 'olejnik123', 'user'),
(12, 'Karolina', 'Wójcik', 'karolina789@gmail.co', 'karolina', 'wojcikpass', 'user'),
(13, 'Łukasz', 'Kowalczyk', 'lukasz456@yahoo.com', 'lukasz', 'kowal123', 'user'),
(14, 'Magdalena', 'Piotrowska', 'magdalena789@gmail.c', 'magdalena', 'piotrowska123', 'user'),
(15, 'Kamil', 'Marciniak', 'kamil456@gmail.com', 'kamil', 'marciniakpass', 'user'),
(16, 'Kinga', 'Lewandowska', 'kinga789@gmail.com', 'kinga', 'lewandowska123', 'user'),
(17, 'Dawid', 'Zając', 'dawid456@yahoo.com', 'dawid', 'zajacpass', 'user'),
(18, 'Wiktoria', 'Witkowska', 'wiktoria789@gmail.co', 'wiktoria', 'witkowska123', 'user'),
(23, 'Paweł', 'Senia', 'senia@wp.pl', 'senik12', 'halsowea', 'user'),
(29, 'Dziupel', 'Pławiak', 'dziupel@o2.pl', 'dziupel', 'user', 'user'),
(32, 'dasads', 'dasasd', 'asdsdaasd@asdads.pl', 'dsads', 'sdadas', 'user');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`gameID`);

--
-- Indeksy dla tabeli `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderID`),
  ADD KEY `userID` (`userID`),
  ADD KEY `gameID` (`gameID`);

--
-- Indeksy dla tabeli `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `game`
--
ALTER TABLE `game`
  MODIFY `gameID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `orderID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`gameID`) REFERENCES `game` (`gameID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
