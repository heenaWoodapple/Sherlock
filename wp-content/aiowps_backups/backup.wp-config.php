<?php
#define('WP_CACHE', true); // WP-Optimize Cache
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'interact_wp641' );
/** MySQL database username */
define( 'DB_USER', 'sherlock_dbu' );
/** MySQL database password */
define( 'DB_PASSWORD', 'Bhdsr#!752lanKds' );
/** MySQL hostname */
define( 'DB_HOST', 'localhost' );
/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );
/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );
/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'sruk4idtksjs8kpplll1zxks7gwvan3fsogxaj9f8o1evca2idowxvxcag3jwlx2' );
define( 'SECURE_AUTH_KEY',  'phbsiqeqzsyvanw2ugbreewrrnik8frsn1dvcdaukz8vvfxnuoa53euepwpsptz6' );
define( 'LOGGED_IN_KEY',    'aksjplwlgfimxa7lrvsrgrqr3kanygijags6iz4iebdgiuojrqyhnirrg37yvolz' );
define( 'NONCE_KEY',        '6gsax6rx6vvxmxrbliulymo2ekrqgomm56pdkmpbpuxghstj4hyauockr4tvncss' );
define( 'AUTH_SALT',        'amjx9gxpxiajm776wljgockbdebyi4plcyuwgowvhtoebeyqjjkqokm4ob7rihla' );
define( 'SECURE_AUTH_SALT', 'tfyqxyekookv2vmpfwvtitnss7rd8subhbvfskres9tierhicitmkhelqvpuh3tv' );
define( 'LOGGED_IN_SALT',   'caeds6qpgaywne8q8i9v6dbycjpqaeog1evtknhaaokmlh9smh4hz2lxaqm8n5ol' );
define( 'NONCE_SALT',       'c757yegghhiuzzj7q7zclegjbbusobcznfvgao36t4mhwzfxeyizl4k24pza5fed' );
/**#@-*/
/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpyf_';
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );
/* That's all, stop editing! Happy publishing. */
/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}
/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
define('DISALLOW_FILE_EDIT', true);
define('FS_METHOD', 'direct');
