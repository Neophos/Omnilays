'use strict';
$(function() {

    var $player1Spinner = $('#player1Spinner');
    var $player2Spinner = $('#player2Spinner');
    var $player1Name = $('#player1Name');
    var $player2Name = $('#player2Name');
    var $player1Score = $('#player1Score');
    var $player2Score = $('#player2Score');
    var $player1Flag = $('#player1Flag');
    var $player2Flag = $('#player2Flag');
    var $player1CountryCode = "";
    var $player2CountryCode = "";
    var $player1Container = $('#player1 > .playerContainer');
    var $player2Container = $('#player2 > .playerContainer');

    var matchLimitScore;

    var player1ClipPath;
    var player2ClipPath;
    var offset = 200;

    //var $replicantCurrentTheme = nodecg.replicant(replicantCurrentTheme);

    var $tournamentRound = $('#tournamentRound');
    var $tournamentRoundText = $('#tournamentRoundText');


    // Contains two objects, player 1 at value[0] and player 2 at value[1]
    var replicantCurrentMatchData = nodecg.Replicant("replicantCurrentMatch");
    var previousMatchData = new Object();

    initialize();

    // Triggered every time update or swap button in player control panel is pressed, and on init
    replicantCurrentMatchData.on('change', (newValue, oldValue) => {
        updateScreen();
    });

    function updateScreen() {

        if(replicantCurrentMatchData.value[0].name != previousMatchData.value[0].name)
        {
            newPlayer(1);
        }
        if(replicantCurrentMatchData.value[1].name != previousMatchData.value[1].name)
        {
            newPlayer(2);
        }

        matchLimitScore = replicantCurrentMatchData.value[3];

        if(replicantCurrentMatchData.value[0].score != previousMatchData.value[0].score)
        {
            setScores(1);
        }
        if(replicantCurrentMatchData.value[1].score != previousMatchData.value[1].score)
        {
            setScores(2);
        }

        $tournamentRoundText.text(replicantCurrentMatchData.value[2]);

        // Deep copy using JQuery
        previousMatchData = jQuery.extend(true, {}, replicantCurrentMatchData);
    }

    function newPlayer(side) {
        switchName(side);
    }
    
    function initialize() {
        previousMatchData.value = [{name:"", score:"", flag:""}, {name:"", score:"", flag:""}]
        $player1Name.text(" ");
        $player2Name.text(" ");
        $player1Score.text(" ");
        $player2Score.text(" ");
        $player1Flag.text(" ");
        $player2Flag.text(" ");
    }

    function switchName(side) {
        if(side == 1) {

            $player1Spinner.toggleClass('rotatingCCW', true);

            $player1Container.animate({  now: '+=400' },
            {
                duration:1500,
                easing:'easeInOutQuart',
                step: function(now,fx) {
                    player1ClipPath = 0 + ' ' + (now - offset) + 'px ' + 0 + ' ' + 0;
                    $player1Container.css('left', now)
                    $player1Container.css({"clip-path": 'inset(' + player1ClipPath + ')'});
                },
                complete: function() {

                    $player1Spinner.toggleClass('rotatingCCW', false);
                    $player1Spinner.toggleClass('backToZero', true);
                    $player1Container.animate({  now: '-=400' },
                    {
                        duration:1500,
                        easing: 'easeOutBack',
                        step: function(now,fx) {
                            $player1Name.text(replicantCurrentMatchData.value[0].name);
                            setFlags(side);
                            player1ClipPath = 0 + ' ' + (now - offset) + 'px ' + 0 + ' ' + 0;
                            $player1Container.css('left', now)
                            $player1Container.css({"clip-path": 'inset(' + player1ClipPath + ')'});
                        },
                        complete: function() {
                            $player1Spinner.toggleClass('backToZero', false);
                        }
                    })
                }
            });
        
        }
        if(side == 2) {

            $player2Spinner.toggleClass('rotatingCW', true);

            $player2Container.animate({  now: '+=400' },
            {
                duration:1500,
                easing:'easeInOutQuart',
                step: function(now,fx) {
                    player2ClipPath = 0 + ' ' + 0 + ' ' + 0 + ' ' + (now - offset) + 'px ';
                    $player2Spinner.toggleClass('rotatingCW', true);
                    $player2Container.css('left', -now)
                    $player2Container.css({"clip-path": 'inset(' + player2ClipPath + ')'});
                },
                complete: function() {
                    $player2Spinner.toggleClass('backToZero', true);
                    $player2Container.animate({  now: '-=400' },
                    {
                        duration:1500,
                        easing: 'easeOutBack',
                        step: function(now,fx) {
                            $player2Name.text(replicantCurrentMatchData.value[1].name);
                            setFlags(side);
                            player2ClipPath = 0 + ' ' + 0 + ' ' + 0 + ' ' + (now - offset) + 'px ';
                            $player2Container.css('left', -now)
                            $player2Spinner.toggleClass('backToZero', true);
                            $player2Container.css({"clip-path": 'inset(' + player2ClipPath + ')'});
                        }
                    })
                }
            });
        }
    }

    function setScores() {
        $player1Score.text(replicantCurrentMatchData.value[0].score);

        $player2Score.text(replicantCurrentMatchData.value[1].score);
    }

    function setFlags(side) {

        console.log("switch flags");

        if(side == 1) {
    
            $player1Flag.toggleClass("flag-" + $player1CountryCode.toLowerCase(), false);
            $player1Flag.css("background-position", "");   
    
            $player1CountryCode = getCountryCode(replicantCurrentMatchData.value[0].flag);
    
            $player1Flag.toggleClass("flag-" + $player1CountryCode.toLowerCase(), true);

            var temp = parseInt($player1Flag.css("background-position-x")) * 2 - 4;
            $player1Flag.css("background-position-x", temp + "px");
            temp = parseInt($player1Flag.css("background-position-y")) * 2 - 12;
            $player1Flag.css("background-position-y", temp + "px");
        }
        if(side == 2) {
            $player2Flag.toggleClass("flag-" + $player2CountryCode.toLowerCase(), false);
            $player2Flag.css("background-position", "");   
    
            $player2CountryCode = getCountryCode(replicantCurrentMatchData.value[1].flag);
    
            $player2Flag.toggleClass("flag-" + $player2CountryCode.toLowerCase(), true);

            var temp = parseInt($player2Flag.css("background-position-x")) * 2 - 4;
            $player2Flag.css("background-position-x", temp + "px");
            temp = parseInt($player2Flag.css("background-position-y")) * 2 - 12;
            $player2Flag.css("background-position-y", temp + "px");
        }
    }

    function winningScore(side) {
        if(side == 1) {

        }
        else if(side == 2){

        }
    }

    nodecg.listenFor("smashgg-sendrounddata", function() {

    });

    nodecg.listenFor("newMatch", function() {
        newMatch();
    });

    nodecg.listenFor("updateScore", function(side) {
        //updateScore(side);
    });

    function newMatch() {
        
    }


    var isoCountries = {
        'AF' : 'Afghanistan',
        'AX' : 'Aland Islands',
        'AL' : 'Albania',
        'DZ' : 'Algeria',
        'AS' : 'American Samoa',
        'AD' : 'Andorra',
        'AO' : 'Angola',
        'AI' : 'Anguilla',
        'AQ' : 'Antarctica',
        'AG' : 'Antigua And Barbuda',
        'AR' : 'Argentina',
        'AM' : 'Armenia',
        'AW' : 'Aruba',
        'AU' : 'Australia',
        'AT' : 'Austria',
        'AZ' : 'Azerbaijan',
        'BS' : 'Bahamas',
        'BH' : 'Bahrain',
        'BD' : 'Bangladesh',
        'BB' : 'Barbados',
        'BY' : 'Belarus',
        'BE' : 'Belgium',
        'BZ' : 'Belize',
        'BJ' : 'Benin',
        'BM' : 'Bermuda',
        'BT' : 'Bhutan',
        'BO' : 'Bolivia',
        'BA' : 'Bosnia And Herzegovina',
        'BW' : 'Botswana',
        'BV' : 'Bouvet Island',
        'BR' : 'Brazil',
        'IO' : 'British Indian Ocean Territory',
        'BN' : 'Brunei Darussalam',
        'BG' : 'Bulgaria',
        'BF' : 'Burkina Faso',
        'BI' : 'Burundi',
        'KH' : 'Cambodia',
        'CM' : 'Cameroon',
        'CA' : 'Canada',
        'CV' : 'Cape Verde',
        'KY' : 'Cayman Islands',
        'CF' : 'Central African Republic',
        'TD' : 'Chad',
        'CL' : 'Chile',
        'CN' : 'China',
        'CX' : 'Christmas Island',
        'CC' : 'Cocos (Keeling) Islands',
        'CO' : 'Colombia',
        'KM' : 'Comoros',
        'CG' : 'Congo',
        'CD' : 'Congo, Democratic Republic',
        'CK' : 'Cook Islands',
        'CR' : 'Costa Rica',
        'CI' : 'Cote D\'Ivoire',
        'HR' : 'Croatia',
        'CU' : 'Cuba',
        'CY' : 'Cyprus',
        'CZ' : 'Czech Republic',
        'DK' : 'Denmark',
        'DJ' : 'Djibouti',
        'DM' : 'Dominica',
        'DO' : 'Dominican Republic',
        'EC' : 'Ecuador',
        'EG' : 'Egypt',
        'SV' : 'El Salvador',
        'GQ' : 'Equatorial Guinea',
        'ER' : 'Eritrea',
        'EE' : 'Estonia',
        'ET' : 'Ethiopia',
        'FK' : 'Falkland Islands (Malvinas)',
        'FO' : 'Faroe Islands',
        'FJ' : 'Fiji',
        'FI' : 'Finland',
        'FR' : 'France',
        'GF' : 'French Guiana',
        'PF' : 'French Polynesia',
        'TF' : 'French Southern Territories',
        'GA' : 'Gabon',
        'GM' : 'Gambia',
        'GE' : 'Georgia',
        'DE' : 'Germany',
        'GH' : 'Ghana',
        'GI' : 'Gibraltar',
        'GR' : 'Greece',
        'GL' : 'Greenland',
        'GD' : 'Grenada',
        'GP' : 'Guadeloupe',
        'GU' : 'Guam',
        'GT' : 'Guatemala',
        'GG' : 'Guernsey',
        'GN' : 'Guinea',
        'GW' : 'Guinea-Bissau',
        'GY' : 'Guyana',
        'HT' : 'Haiti',
        'HM' : 'Heard Island & Mcdonald Islands',
        'VA' : 'Holy See (Vatican City State)',
        'HN' : 'Honduras',
        'HK' : 'Hong Kong',
        'HU' : 'Hungary',
        'IS' : 'Iceland',
        'IN' : 'India',
        'ID' : 'Indonesia',
        'IR' : 'Iran, Islamic Republic Of',
        'IQ' : 'Iraq',
        'IE' : 'Ireland',
        'IM' : 'Isle Of Man',
        'IL' : 'Israel',
        'IT' : 'Italy',
        'JM' : 'Jamaica',
        'JP' : 'Japan',
        'JE' : 'Jersey',
        'JO' : 'Jordan',
        'KZ' : 'Kazakhstan',
        'KE' : 'Kenya',
        'KI' : 'Kiribati',
        'KR' : 'Korea',
        'KW' : 'Kuwait',
        'KG' : 'Kyrgyzstan',
        'LA' : 'Lao People\'s Democratic Republic',
        'LV' : 'Latvia',
        'LB' : 'Lebanon',
        'LS' : 'Lesotho',
        'LR' : 'Liberia',
        'LY' : 'Libyan Arab Jamahiriya',
        'LI' : 'Liechtenstein',
        'LT' : 'Lithuania',
        'LU' : 'Luxembourg',
        'MO' : 'Macao',
        'MK' : 'Macedonia',
        'MG' : 'Madagascar',
        'MW' : 'Malawi',
        'MY' : 'Malaysia',
        'MV' : 'Maldives',
        'ML' : 'Mali',
        'MT' : 'Malta',
        'MH' : 'Marshall Islands',
        'MQ' : 'Martinique',
        'MR' : 'Mauritania',
        'MU' : 'Mauritius',
        'YT' : 'Mayotte',
        'MX' : 'Mexico',
        'FM' : 'Micronesia, Federated States Of',
        'MD' : 'Moldova',
        'MC' : 'Monaco',
        'MN' : 'Mongolia',
        'ME' : 'Montenegro',
        'MS' : 'Montserrat',
        'MA' : 'Morocco',
        'MZ' : 'Mozambique',
        'MM' : 'Myanmar',
        'NA' : 'Namibia',
        'NR' : 'Nauru',
        'NP' : 'Nepal',
        'NL' : 'Netherlands',
        'AN' : 'Netherlands Antilles',
        'NC' : 'New Caledonia',
        'NZ' : 'New Zealand',
        'NI' : 'Nicaragua',
        'NE' : 'Niger',
        'NG' : 'Nigeria',
        'NU' : 'Niue',
        'NF' : 'Norfolk Island',
        'MP' : 'Northern Mariana Islands',
        'NO' : 'Norway',
        'OM' : 'Oman',
        'PK' : 'Pakistan',
        'PW' : 'Palau',
        'PS' : 'Palestinian Territory, Occupied',
        'PA' : 'Panama',
        'PG' : 'Papua New Guinea',
        'PY' : 'Paraguay',
        'PE' : 'Peru',
        'PH' : 'Philippines',
        'PN' : 'Pitcairn',
        'PL' : 'Poland',
        'PT' : 'Portugal',
        'PR' : 'Puerto Rico',
        'QA' : 'Qatar',
        'RE' : 'Reunion',
        'RO' : 'Romania',
        'RU' : 'Russian Federation',
        'RW' : 'Rwanda',
        'BL' : 'Saint Barthelemy',
        'SH' : 'Saint Helena',
        'KN' : 'Saint Kitts And Nevis',
        'LC' : 'Saint Lucia',
        'MF' : 'Saint Martin',
        'PM' : 'Saint Pierre And Miquelon',
        'VC' : 'Saint Vincent And Grenadines',
        'WS' : 'Samoa',
        'SM' : 'San Marino',
        'ST' : 'Sao Tome And Principe',
        'SA' : 'Saudi Arabia',
        'SN' : 'Senegal',
        'RS' : 'Serbia',
        'SC' : 'Seychelles',
        'SL' : 'Sierra Leone',
        'SG' : 'Singapore',
        'SK' : 'Slovakia',
        'SI' : 'Slovenia',
        'SB' : 'Solomon Islands',
        'SO' : 'Somalia',
        'ZA' : 'South Africa',
        'GS' : 'South Georgia And Sandwich Isl.',
        'ES' : 'Spain',
        'LK' : 'Sri Lanka',
        'SD' : 'Sudan',
        'SR' : 'Suriname',
        'SJ' : 'Svalbard And Jan Mayen',
        'SZ' : 'Swaziland',
        'SE' : 'Sweden',
        'CH' : 'Switzerland',
        'SY' : 'Syrian Arab Republic',
        'TW' : 'Taiwan',
        'TJ' : 'Tajikistan',
        'TZ' : 'Tanzania',
        'TH' : 'Thailand',
        'TL' : 'Timor-Leste',
        'TG' : 'Togo',
        'TK' : 'Tokelau',
        'TO' : 'Tonga',
        'TT' : 'Trinidad And Tobago',
        'TN' : 'Tunisia',
        'TR' : 'Turkey',
        'TM' : 'Turkmenistan',
        'TC' : 'Turks And Caicos Islands',
        'TV' : 'Tuvalu',
        'UG' : 'Uganda',
        'UA' : 'Ukraine',
        'AE' : 'United Arab Emirates',
        'GB' : 'United Kingdom',
        'US' : 'United States',
        'UM' : 'United States Outlying Islands',
        'UY' : 'Uruguay',
        'UZ' : 'Uzbekistan',
        'VU' : 'Vanuatu',
        'VE' : 'Venezuela',
        'VN' : 'Viet Nam',
        'VG' : 'Virgin Islands, British',
        'VI' : 'Virgin Islands, U.S.',
        'WF' : 'Wallis And Futuna',
        'EH' : 'Western Sahara',
        'YE' : 'Yemen',
        'ZM' : 'Zambia',
        'ZW' : 'Zimbabwe'
    };
    
    function getCountryName (countryCode) {
        if (isoCountries.hasOwnProperty(countryCode)) {
            return isoCountries[countryCode];
        } else {
            return countryCode;
        }
    }

    function getCountryCode (countryName) {
        for(var key in isoCountries){
            var value = isoCountries[key];
            if(value == countryName)
            {  
                return key;
            }
        }

        return "xx";
    }
});