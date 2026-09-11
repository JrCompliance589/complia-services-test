<?php
define( 'WP_CACHE', true ); // Added by WP Rocket


 // Added by WP Rocket


 // Added by WP Rocket



 // Added by AirLift






/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u627756181_compliaservice' );

/** Database username */
define( 'DB_USER', 'u627756181_compliaservice' );

/** Database password */
define( 'DB_PASSWORD', 'Complia@2024' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'zhYtLrd!_}726w`^y9aJgYj^&9A%EYKp_x@||U#a]DB4f._+>.4yfI yxDLAuI7Z' );
define( 'SECURE_AUTH_KEY',   'Syzmf!JLvB3Q8kTm$;)}0Dp,{){pjIlmKG)*j d g$i3}mt>uNxFc=bVSB&txb<s' );
define( 'LOGGED_IN_KEY',     '|XT3.zc&E[b/D7kSg1~DMvp!kQ2JAgWxZlW]nkdV4joT@QP,ME%>gpW}@H}rh{O*' );
define( 'NONCE_KEY',         '7G-dM(ijFtt.()9t6_U~(iznkUhe4Ngy!>0eqw3?|=WP(b mX=stIEw0e+PgJaxc' );
define( 'AUTH_SALT',         'E3U%2cz|AI{(zmSbz@Y>_ubeu;<c|l{c,o:#$$_)LNiO]QJ`. .f3 9 7K1DK`b,' );
define( 'SECURE_AUTH_SALT',  'H=v9/?Yzu/}`wj:K+M7Xch%gH1Vg07X% ,q}t,QV5Hwr~O9<RT;z} t}ZOK/*qo,' );
define( 'LOGGED_IN_SALT',    'X$M`Y#yXE,DT*q^P4<ibKGabEvcpK5iQtX-K:.4jd^]9j/vzd,O&qd{ewc<#F%6W' );
define( 'NONCE_SALT',        'cuE6ln>Dol!tFMfVof)cnBpPhq4,9}i8!5wY*20c{9:^WE-gyL>*zv-YGO9lg+bE' );
define( 'WP_CACHE_KEY_SALT', '{O}I<g>1TG)y`ZYtiY5AGp!Ne:IyGp%+%d-~KRXuwleX|9D~f1K1XU]7bKSxikM$' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



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
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'FS_METHOD', 'direct' );
define( 'COOKIEHASH', '574c1d1382af055e3ebe910358778587' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
define( 'WP_DEBUG_LOG', false );
define( 'WP_DEBUG_DISPLAY', false );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
