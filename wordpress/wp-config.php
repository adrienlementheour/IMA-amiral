<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clefs secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur 
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C'est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d'installation. Vous n'avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'ima');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'admin42');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', 'P@ssw0rd44_cli024');

/** Adresse de l'hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8');

/** Type de collation de la base de données. 
  * N'y touchez que si vous savez ce que vous faites. 
  */
define('DB_COLLATE', '');

/**#@+
 * Clefs uniques d'authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant 
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n'importe quel moment, afin d'invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'V^O+P>%zwH)T1)3o{I6<P1b]%?[<1^q2=x$Y<3/3vu_dyWvBN(F0DIw;ab;VJ|*6');
define('SECURE_AUTH_KEY',  'tU@K!<zZgL-5No+5,|Y9? Q,p29e=+DyK$Cy|Pl{24W?C[O5:o-e!2Ga,G&NRO^,');
define('LOGGED_IN_KEY',    ' /!|7q2P;_D6}jgti&,/sy#7!IcSahZ>mN{-* X t+E6Cz`|2*Z`OxV$i7K}U|fJ');
define('NONCE_KEY',        '.Hd_|Ar2hmzZX@+K$`2F5{|G|!+k 0pHz:5GtSPG4g(8A9MUX&/6P)V@[3(79:h,');
define('AUTH_SALT',        'hHI>gs!*kuxq)UFKh>:vpAG`coh`:+U Dvz=;W?mGgQXT+`%hFrd-=1FJ/y9Kcr8');
define('SECURE_AUTH_SALT', 'WW&nIqNg,PhALrQh];e{i-ZmP81{{]=AwYj<Zx7[E]#eSbC}d|sut!cY=EJs|u)`');
define('LOGGED_IN_SALT',   'w*]}x6A!#Y,6+eI!3_`2p,MRX%}<M=Kc,H~n@q+M) %km;Yt+e)Um}opT%Z[S&fa');
define('NONCE_SALT',       '73OLo=fF6D;Uu5l/s/Vc5KAlaG}rWpR>60`B9I_#LhFE+}}?EFy[-_t&-Pt,rBU-');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique. 
 * N'utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés!
 */
$table_prefix  = 'ima_';

/** 
 * Pour les développeurs : le mode deboguage de WordPress.
 * 
 * En passant la valeur suivante à "true", vous activez l'affichage des
 * notifications d'erreurs pendant votre essais.
 * Il est fortemment recommandé que les développeurs d'extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de 
 * développement.
 */ 
define('WP_DEBUG', true); 

/* C'est tout, ne touchez pas à ce qui suit ! Bon blogging ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');