/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50612
Source Host           : localhost:3306
Source Database       : garage

Target Server Type    : MYSQL
Target Server Version : 50612
File Encoding         : 65001

Date: 2014-02-27 01:57:48
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for garage_customer
-- ----------------------------
DROP TABLE IF EXISTS `garage_customer`;
CREATE TABLE `garage_customer` (
  `customer_id` int(5) unsigned NOT NULL AUTO_INCREMENT COMMENT '客户id',
  `customer_name` varchar(25) DEFAULT '' COMMENT '客户姓名',
  `customer_phone` bigint(15) unsigned DEFAULT NULL COMMENT '客户电话',
  `customer_company` varchar(25) DEFAULT '' COMMENT '客户公司/单位',
  `customer_gender` tinyint(1) unsigned DEFAULT '0' COMMENT '客户性别；0：保密，1：男，2：女',
  `customer_age` int(5) unsigned DEFAULT '0' COMMENT '客户年纪；0：保密；1:15-25；2:26-35；3:36-45；4:46-55；5:56-65；6：65以上；',
  `customer_create_by` int(11) unsigned NOT NULL COMMENT '创建人',
  `customer_create_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `customer_last_modify_by` int(11) unsigned NOT NULL COMMENT '最后修改人',
  `customer_last_modify_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '最后一次修改时间',
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 COMMENT='客户表';

-- ----------------------------
-- Records of garage_customer
-- ----------------------------
INSERT INTO `garage_customer` VALUES ('2', '刘的邓', '2147483647', '韦兔子公司', '1', '70', '0', '2014-01-02 01:41:00', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('3', '何华', '2147483647', '吴的邓公司', '2', '91', '0', '2014-01-02 01:40:57', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('4', '吴艹韦', '2147483647', '孙华公司', '1', '94', '0', '2014-01-02 01:40:49', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('5', '徐兔子', '2147483647', '何修孙公司', '1', '106', '0', '2014-01-02 01:41:01', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('6', '韦华', '2147483647', '何是吴公司', '2', '49', '0', '2014-01-02 01:42:07', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('7', '徐艹韦', '2147483647', '刘红公司', '1', '77', '0', '2014-01-02 01:42:08', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('8', '吴伦', '2147483647', '韦修孙公司', '2', '96', '0', '2014-01-02 01:42:08', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('9', '何伦', '2147483647', '孙华公司', '1', '66', '0', '2014-01-02 01:42:09', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('10', '李艹韦', '2147483647', '孙红公司', '2', '37', '0', '2014-01-02 01:42:09', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('11', '徐红', '2147483647', '吴红公司', '2', '116', '0', '2014-01-02 01:42:09', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('12', '谢是吴', '2147483647', '孙修孙公司', '1', '113', '0', '2014-01-02 01:42:10', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('13', '谢艹韦', '2147483647', '李艹韦公司', '1', '47', '0', '2014-01-02 01:42:10', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('14', '韦伦', '2147483647', '韦的邓公司', '2', '49', '0', '2014-01-02 01:42:10', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('15', '徐兔子', '2147483647', '何修孙公司', '1', '118', '0', '2014-01-02 01:42:10', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('16', '何红', '2147483647', '徐修孙公司', '2', '18', '0', '2014-01-02 01:42:10', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('17', '刘修孙', '2147483647', '谢伦的公司', '2', '76', '0', '2014-01-02 01:43:33', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('18', '谢艹韦', '2147483647', '韦伦的公司', '1', '107', '0', '2014-01-02 01:43:33', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('19', '谢修孙', '2147483647', '谢华的公司', '2', '28', '0', '2014-01-02 01:44:34', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('20', '李是吴', '15425913792', '吴是吴的公司', '2', '103', '0', '2014-01-02 01:48:50', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('21', '徐艹韦', '15729205750', '徐的邓的公司', '2', '54', '0', '2014-01-02 01:49:09', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('22', '谢是吴', '15316655640', '李的邓的公司', '1', '109', '0', '2014-01-02 01:49:10', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('23', '韦是吴', '15101126005', '谢是吴的公司', '2', '78', '0', '2014-01-02 01:49:10', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('24', '徐旺', '15176266986', '徐修孙的公司', '1', '27', '0', '2014-01-02 01:49:10', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('25', '邓红', '15475617057', '徐是吴的公司', '1', '48', '0', '2014-01-02 01:49:10', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('26', '吴旺', '15604061477', '孙旺的公司', '2', '38', '0', '2014-01-02 01:49:11', '0', '0000-00-00 00:00:00');

-- ----------------------------
-- Table structure for garage_detail
-- ----------------------------
DROP TABLE IF EXISTS `garage_detail`;
CREATE TABLE `garage_detail` (
  `detail_id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '流水id',
  `customer_id` int(5) unsigned DEFAULT NULL COMMENT '客户id',
  `detail_car_number` varchar(15) NOT NULL DEFAULT '' COMMENT '车牌号',
  `detail_fix_type_id` int(11) DEFAULT NULL COMMENT '维修事项',
  `detail_fix_charge` decimal(11,2) DEFAULT NULL COMMENT '维修费用',
  `detail_fix_staff_id` int(11) DEFAULT NULL COMMENT '维修员工',
  `detail_fix_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '维修时间',
  `detail_fix_parts_id` int(11) unsigned DEFAULT NULL COMMENT '维修配件（应可选，从库存里来，计算成本）',
  `detail_fix_describe` varchar(25) DEFAULT '' COMMENT '维修记录备注',
  `detail_create_by` int(11) unsigned NOT NULL COMMENT '流水创建人',
  `detail_create_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '流水创建时间',
  `detail_last_modify_by` int(11) unsigned NOT NULL COMMENT '最后修改人',
  `detail_last_modify_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '最后一次修改时间',
  PRIMARY KEY (`detail_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COMMENT='维修流水表';

-- ----------------------------
-- Records of garage_detail
-- ----------------------------
INSERT INTO `garage_detail` VALUES ('1', '1', '粤B:520WW', '1', '20.00', '1', '0000-00-00 00:00:00', '1', '李某某今天修了保险杠', '0', '0000-00-00 00:00:00', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_detail` VALUES ('3', '3', '粤B:494WW', '4', '30.00', '9', '2014-12-02 00:27:21', '9', '李某某今天修了保险杠', '0', '2014-12-02 00:27:21', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_detail` VALUES ('4', '1', '粤B:374WW', '8', '30.00', '4', '2014-12-02 00:27:27', '1', '李某某今天修了保险杠', '0', '2014-12-02 00:27:27', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_detail` VALUES ('5', '3', '粤B:506WW', '6', '430.22', '3', '2014-12-02 00:28:42', '4', '李某某今天修了保险杠', '0', '2014-12-02 00:28:42', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_detail` VALUES ('6', '6', '粤B:745WW', '4', '230.22', '6', '2014-12-02 00:28:44', '9', '李某某今天修了保险杠', '0', '2014-12-02 00:28:44', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_detail` VALUES ('7', '3', '粤B:224WW', '5', '630.22', '1', '2014-12-02 00:33:23', '3', '李某某今天修了保险杠', '0', '2014-12-02 00:33:23', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_detail` VALUES ('8', '4', '粤B:732WW', '9', '630.22', '8', '2014-12-02 00:33:24', '7', '李某某今天修了保险杠', '0', '2014-12-02 00:33:24', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_detail` VALUES ('9', '2', '粤B:213WW', '3', '330.22', '7', '2014-12-02 00:36:06', '4', '李某某今天修了保险杠', '0', '2014-12-02 00:36:06', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_detail` VALUES ('10', '7', '粤B:606WW', '8', '430.22', '5', '2014-12-02 00:44:20', '6', '李某某今天修了保险杠', '0', '2014-12-02 00:44:20', '0', '0000-00-00 00:00:00');

-- ----------------------------
-- Table structure for garage_parts
-- ----------------------------
DROP TABLE IF EXISTS `garage_parts`;
CREATE TABLE `garage_parts` (
  `parts_id` int(15) unsigned NOT NULL AUTO_INCREMENT COMMENT '配件id',
  `parts_name` varchar(15) CHARACTER SET utf8 DEFAULT '' COMMENT '配件名称',
  `parts_cost` decimal(9,2) DEFAULT '0.00' COMMENT '配件进货价',
  `parts_size` double(9,2) DEFAULT '0.00' COMMENT '配件尺寸',
  PRIMARY KEY (`parts_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of garage_parts
-- ----------------------------

-- ----------------------------
-- Table structure for garage_staff
-- ----------------------------
DROP TABLE IF EXISTS `garage_staff`;
CREATE TABLE `garage_staff` (
  `staff_id` int(5) unsigned NOT NULL AUTO_INCREMENT COMMENT '员工id',
  `staff_name` varchar(10) DEFAULT '' COMMENT '员工姓名',
  `staff_mobile` bigint(15) unsigned DEFAULT NULL COMMENT '员工手机',
  `staff_birthday` date DEFAULT '0000-00-00' COMMENT '员工生日',
  `staff_family_contact` int(15) unsigned DEFAULT NULL COMMENT '员工家庭联系方式',
  `staff_family_address` varchar(25) DEFAULT '' COMMENT '员工家庭地址',
  `staff_now_address` varchar(25) DEFAULT '' COMMENT '员工现居地',
  `staff_create_by` int(11) unsigned NOT NULL COMMENT '创建人',
  `staff_create_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `staff_last_modify_by` int(11) unsigned NOT NULL COMMENT '最后修改人',
  `staff_last_modify_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '最后一次修改时间',
  PRIMARY KEY (`staff_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='员工表';

-- ----------------------------
-- Records of garage_staff
-- ----------------------------
INSERT INTO `garage_staff` VALUES ('1', 'admin', '15502003496', '0000-00-00', '4294967295', '福建上杭', '坂田', '1', '0000-00-00 00:00:00', '0', '0000-00-00 00:00:00');

-- ----------------------------
-- Table structure for gargae_repair_type
-- ----------------------------
DROP TABLE IF EXISTS `gargae_repair_type`;
CREATE TABLE `gargae_repair_type` (
  `type_id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '维修项目id',
  `type_name` varchar(25) CHARACTER SET utf8 DEFAULT '' COMMENT '维修项目名称（如钣金等）',
  `type_describe` varchar(25) CHARACTER SET utf8 DEFAULT '' COMMENT '项目描述',
  `type_base_charge` decimal(9,2) DEFAULT NULL COMMENT '项目基本收费',
  `type_create_by` int(11) unsigned NOT NULL COMMENT '创建人',
  `type_create_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `type_last_modify_by` int(11) unsigned NOT NULL COMMENT '最后修改人',
  `type_last_modify_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '最后一次修改时间',
  PRIMARY KEY (`type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of gargae_repair_type
-- ----------------------------
