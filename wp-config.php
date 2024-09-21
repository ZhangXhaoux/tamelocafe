<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'restaurant' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

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
define( 'AUTH_KEY',         'i#Tv4CkrJeY$FwxkuE{hU2sOV%vZQm4R##dD{nAB49YYV%8-lh!!SH^Dzt}CPNox' );
define( 'SECURE_AUTH_KEY',  'p*[huhB;Eu Zs(J#$Kj.Jxb*#7?A=[vyLR;S[5NZe!&:j_av3wqZT U,W)AE]nsa' );
define( 'LOGGED_IN_KEY',    'tKur?cWQEnBg-ZjdCq9]?[O(*m(dM*U,}8N%?1+L;`l/5Mr3wuLYt:HNG}{0aYZp' );
define( 'NONCE_KEY',        'wB|<59SS#>o{!c=PN#_]8x>`<i2@SxQ,=iYZ){JZE:d4[V)OMY>Gr:;-_26*`0NR' );
define( 'AUTH_SALT',        'ZSph;W4tPx>AxrV?Dn9#|Z7DM8[ISYE}L=UA??M[O`=ZvH#vfd<zpMiT  p5Ww^k' );
define( 'SECURE_AUTH_SALT', '<nZ)4obk?*%T91WsglG#G>I+Fo=ZIEp:`$N^t,RWm6#G5l3 n=?u8qXC>h%S^z(P' );
define( 'LOGGED_IN_SALT',   'k^X`cI`%pHP(:GyC{ie#$#{;z^32Eu;8-lo|PzPpup5p}+_PfbvIP/.@tbSd.:<]' );
define( 'NONCE_SALT',       ',9[.@=][WG@Yu4^{_TF i0-0o3;hi0ESMn(+ajB:SJ5a3r~UKBn*LpSW!l+qR 2u' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
