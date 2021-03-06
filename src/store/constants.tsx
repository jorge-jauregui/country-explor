export interface CountryGDP {
  country: {id: string, value: string}
  countryiso3code: string
  date: string
  decimal: number
  indicator: {id: string, value: string}
  obs_status: string
  unit: string 
  value: number
}

export const countries = [
  { abbreviation: 'AND', label: 'Andorra' },
  { abbreviation: 'ARE', label: 'United Arab Emirates' },
  { abbreviation: 'AFG', label: 'Afghanistan' },
  { abbreviation: 'ATG', label: 'Antigua and Barbuda' },
  { abbreviation: 'AIA', label: 'Anguilla' },
  { abbreviation: 'ALB', label: 'Albania' },
  { abbreviation: 'ARM', label: 'Armenia' },
  { abbreviation: 'AGO', label: 'Angola' },
  { abbreviation: 'ARG', label: 'Argentina' },
  { abbreviation: 'ASM', label: 'American Samoa' },
  { abbreviation: 'AUT', label: 'Austria' },
  { abbreviation: 'AUS', label: 'Australia' },
  { abbreviation: 'ABW', label: 'Aruba' },
  { abbreviation: 'AZE', label: 'Azerbaijan' },
  { abbreviation: 'BIH', label: 'Bosnia and Herzegovina' },
  { abbreviation: 'BRB', label: 'Barbados' },
  { abbreviation: 'BGD', label: 'Bangladesh' },
  { abbreviation: 'BEL', label: 'Belgium' },
  { abbreviation: 'BFA', label: 'Burkina Faso' },
  { abbreviation: 'BGR', label: 'Bulgaria' },
  { abbreviation: 'BHR', label: 'Bahrain' },
  { abbreviation: 'BDI', label: 'Burundi' },
  { abbreviation: 'BEN', label: 'Benin' },
  { abbreviation: 'BMU', label: 'Bermuda' },
  { abbreviation: 'BRN', label: 'Brunei' },
  { abbreviation: 'BOL', label: 'Bolivia' },
  { abbreviation: 'BRA', label: 'Brazil' },
  { abbreviation: 'BHS', label: 'Bahamas' },
  { abbreviation: 'BTN', label: 'Bhutan' },
  { abbreviation: 'BWA', label: 'Botswana' },
  { abbreviation: 'BLR', label: 'Belarus' },
  { abbreviation: 'BLZ', label: 'Belize' },
  { abbreviation: 'CAN', label: 'Canada' },
  { abbreviation: 'CCK', label: 'Cocos (Keeling) Islands' },
  { abbreviation: 'ZAR', label: 'Congo, Democratic Republic of the' },
  { abbreviation: 'CAF', label: 'Central African Republic' },
  { abbreviation: 'COG', label: 'Congo, Republic of the' },
  { abbreviation: 'CHE', label: 'Switzerland' },
  { abbreviation: 'CIV', label: "Cote d'Ivoire" },
  { abbreviation: 'COK', label: 'Cook Islands' },
  { abbreviation: 'CHL', label: 'Chile' },
  { abbreviation: 'CMR', label: 'Cameroon' },
  { abbreviation: 'CHN', label: 'China' },
  { abbreviation: 'COL', label: 'Colombia' },
  { abbreviation: 'CRI', label: 'Costa Rica' },
  { abbreviation: 'CUB', label: 'Cuba' },
  { abbreviation: 'CPV', label: 'Cape Verde' },
  { abbreviation: 'CXR', label: 'Christmas Island' },
  { abbreviation: 'CYP', label: 'Cyprus'},
  { abbreviation: 'CZE', label: 'Czech Republic' },
  { abbreviation: 'DEU', label: 'Germany' },
  { abbreviation: 'DJI', label: 'Djibouti' },
  { abbreviation: 'DNK', label: 'Denmark' },
  { abbreviation: 'DMA', label: 'Dominica' },
  { abbreviation: 'DOM', label: 'Dominican Republic' },
  { abbreviation: 'DZA', label: 'Algeria' },
  { abbreviation: 'ECU', label: 'Ecuador' },
  { abbreviation: 'EST', label: 'Estonia' },
  { abbreviation: 'EGY', label: 'Egypt' },
  { abbreviation: 'ESH', label: 'Western Sahara' },
  { abbreviation: 'ERI', label: 'Eritrea' },
  { abbreviation: 'ESP', label: 'Spain' },
  { abbreviation: 'ETH', label: 'Ethiopia (excludes Eritrea)' },
  { abbreviation: 'FIN', label: 'Finland' },
  { abbreviation: 'FJI', label: 'Fiji' },
  { abbreviation: 'FLK', label: 'Falkland Islands (Malvinas)' },
  { abbreviation: 'FSM', label: 'Micronesia, Federated States of' },
  { abbreviation: 'FRA', label: 'France' },
  { abbreviation: 'GAB', label: 'Gabon' },
  { abbreviation: 'GBR', label: 'United Kingdom' },
  { abbreviation: 'GRD', label: 'Grenada' },
  { abbreviation: 'GEO', label: 'Georgia' },
  { abbreviation: 'GUF', label: 'French Guiana' },
  { abbreviation: 'GHA', label: 'Ghana' },
  { abbreviation: 'GIB', label: 'Gibraltar' },
  { abbreviation: 'GRL', label: 'Greenland' },
  { abbreviation: 'GMB', label: 'Gambia' },
  { abbreviation: 'GIN', label: 'Guinea' },
  { abbreviation: 'GLP', label: 'Guadeloupe' },
  { abbreviation: 'GNQ', label: 'Equatorial Guinea' },
  { abbreviation: 'GRC', label: 'Greece' },
  { abbreviation: 'GTM', label: 'Guatemala' },
  { abbreviation: 'GUM', label: 'Guam' },
  { abbreviation: 'GNB', label: 'Guinea-Bissau' },
  { abbreviation: 'GUY', label: 'Guyana' },
  { abbreviation: 'HKG', label: 'Hong Kong' },
  { abbreviation: 'HND', label: 'Honduras' },
  { abbreviation: 'HRV', label: 'Croatia' },
  { abbreviation: 'HTI', label: 'Haiti' },
  { abbreviation: 'HUN', label: 'Hungary' },
  { abbreviation: 'IDN', label: 'Indonesia' },
  { abbreviation: 'IRL', label: 'Ireland' },
  { abbreviation: 'ISR', label: 'Israel' },
  { abbreviation: 'IND', label: 'India' },
  { abbreviation: 'IOT', label: 'British Indian Ocean Territory' },
  { abbreviation: 'IRQ', label: 'Iraq' },
  { abbreviation: 'IRN', label: 'Iran, Islamic Republic of' },
  { abbreviation: 'ISL', label: 'Iceland' },
  { abbreviation: 'ITA', label: 'Italy' },
  { abbreviation: 'JAM', label: 'Jamaica' },
  { abbreviation: 'JOR', label: 'Jordan' },
  { abbreviation: 'JPN', label: 'Japan' },
  { abbreviation: 'KEN', label: 'Kenya' },
  { abbreviation: 'KGZ', label: 'Kyrgyzstan' },
  { abbreviation: 'KHM', label: 'Cambodia' },
  { abbreviation: 'KIR', label: 'Kiribati' },
  { abbreviation: 'COM', label: 'Comoros' },
  { abbreviation: 'KNA', label: 'Saint Kitts and Nevis' },
  { abbreviation: 'PRK', label: "Korea, Democratic People's Republic of" },
  { abbreviation: 'KOR', label: 'Korea, Republic of'},
  { abbreviation: 'KWT', label: 'Kuwait' },
  { abbreviation: 'CYM', label: 'Cayman Islands' },
  { abbreviation: 'KAZ', label: 'Kazakhstan'},
  { abbreviation: 'LBN', label: "Lao People's Democratic Republic" },
  { abbreviation: 'LBN', label: 'Lebanon' },
  { abbreviation: 'LCA', label: 'Saint Lucia' },
  { abbreviation: 'LIE', label: 'Liechtenstein' },
  { abbreviation: 'LKA', label: 'Sri Lanka' },
  { abbreviation: 'LBR', label: 'Liberia' },
  { abbreviation: 'LSO', label: 'Lesotho' },
  { abbreviation: 'LTU', label: 'Lithuania' },
  { abbreviation: 'LTU', label: 'Luxembourg' },
  { abbreviation: 'LVA', label: 'Latvia' },
  { abbreviation: 'LBY', label: 'Libya' },
  { abbreviation: 'MAR', label: 'Morocco' },
  { abbreviation: 'MCO', label: 'Monaco' },
  { abbreviation: 'MDA', label: 'Moldova, Republic of' },
  { abbreviation: 'MDG', label: 'Madagascar' },
  { abbreviation: 'MHL', label: 'Marshall Islands' },
  { abbreviation: 'MLI', label: 'Mali' },
  { abbreviation: 'MMR', label: 'Myanmar' },
  { abbreviation: 'MNG', label: 'Mongolia' },
  { abbreviation: 'MAC', label: 'Macao' },
  { abbreviation: 'MNP', label: 'Northern Mariana Islands' },
  { abbreviation: 'MTQ', label: 'Martinique' },
  { abbreviation: 'MRT', label: 'Mauritania' },
  { abbreviation: 'MSR', label: 'Montserrat' },
  { abbreviation: 'MLT', label: 'Malta' },
  { abbreviation: 'MUS', label: 'Mauritius' },
  { abbreviation: 'MDV', label: 'Maldives' },
  { abbreviation: 'MWI', label: 'Malawi' },
  { abbreviation: 'MEX', label: 'Mexico' },
  { abbreviation: 'MYS', label: 'Malaysia' },
  { abbreviation: 'MOZ', label: 'Mozambique' },
  { abbreviation: 'NAM', label: 'Namibia' },
  { abbreviation: 'NCL', label: 'New Caledonia' },
  { abbreviation: 'NER', label: 'Niger' },
  { abbreviation: 'NFK', label: 'Norfolk Island' },
  { abbreviation: 'NGA', label: 'Nigeria' },
  { abbreviation: 'NIC', label: 'Nicaragua' },
  { abbreviation: 'NLD', label: 'Netherlands' },
  { abbreviation: 'NOR', label: 'Norway' },
  { abbreviation: 'NPL', label: 'Nepal' },
  { abbreviation: 'NRU', label: 'Nauru' },
  { abbreviation: 'NIU', label: 'Niue', },
  { abbreviation: 'NZL', label: 'New Zealand' },
  { abbreviation: 'OMN', label: 'Oman' },
  { abbreviation: 'PAN', label: 'Panama' },
  { abbreviation: 'PER', label: 'Peru' },
  { abbreviation: 'PYF', label: 'French Polynesia' },
  { abbreviation: 'PNG', label: 'Papua New Guinea' },
  { abbreviation: 'PHL', label: 'Philippines' },
  { abbreviation: 'PAK', label: 'Pakistan' },
  { abbreviation: 'POL', label: 'Poland' },
  { abbreviation: 'SPM', label: 'Saint Pierre and Miquelon' },
  { abbreviation: 'PCN', label: 'Pitcairn' },
  { abbreviation: 'PRI', label: 'Puerto Rico' },
  { abbreviation: 'PRT', label: 'Portugal' },
  { abbreviation: 'PLW', label: 'Palau' },
  { abbreviation: 'PRY', label: 'Paraguay' },
  { abbreviation: 'QAT', label: 'Qatar' },
  { abbreviation: 'REU', label: 'Reunion' },
  { abbreviation: 'ROM', label: 'Romania' },
  { abbreviation: 'RUS', label: 'Russian Federation' },
  { abbreviation: 'RWA', label: 'Rwanda' },
  { abbreviation: 'SAU', label: 'Saudi Arabia' },
  { abbreviation: 'SLB', label: 'Solomon Islands' },
  { abbreviation: 'SYC', label: 'Seychelles' },
  { abbreviation: 'SDN', label: 'Sudan' },
  { abbreviation: 'SWE', label: 'Sweden' },
  { abbreviation: 'SGP', label: 'Singapore' },
  { abbreviation: 'SHN', label: 'Saint Helena' },
  { abbreviation: 'SVN', label: 'Slovenia' },
  { abbreviation: 'SJM', label: 'Svalbard and Jan Mayen' },
  { abbreviation: 'SLE', label: 'Sierra Leone' },
  { abbreviation: 'SMR', label: 'San Marino' },
  { abbreviation: 'SEN', label: 'Senegal' },
  { abbreviation: 'SOM', label: 'Somalia' },
  { abbreviation: 'SUR', label: 'Suriname' },
  { abbreviation: 'STP', label: 'Sao Tome and Principe' },
  { abbreviation: 'SLV', label: 'El Salvador' },
  { abbreviation: 'SYR', label: 'Syrian Arab Republic' },
  { abbreviation: 'SWZ', label: 'Swaziland' },
  { abbreviation: 'TCA', label: 'Turks and Caicos Islands' },
  { abbreviation: 'TCD', label: 'Chad' },
  { abbreviation: 'TGO', label: 'Togo' },
  { abbreviation: 'THA', label: 'Thailand' },
  { abbreviation: 'TJK', label: 'Tajikistan' },
  { abbreviation: 'TKL', label: 'Tokelau' },
  { abbreviation: 'TMP', label: 'East Timor' },
  { abbreviation: 'TKM', label: 'Turkmenistan' },
  { abbreviation: 'TUN', label: 'Tunisia' },
  { abbreviation: 'TON', label: 'Tonga' },
  { abbreviation: 'TUR', label: 'Turkey' },
  { abbreviation: 'TTO', label: 'Trinidad and Tobago' },
  { abbreviation: 'TUV', label: 'Tuvalu' },
  { abbreviation: 'TWN', label: 'Taiwan' },
  { abbreviation: 'TZA', label: 'Tanzania' },
  { abbreviation: 'UKR', label: 'Ukraine' },
  { abbreviation: 'UGA', label: 'Uganda' },
  { abbreviation: 'USA', label: 'United States' },
  { abbreviation: 'URY', label: 'Uruguay' },
  { abbreviation: 'UZB', label: 'Uzbekistan' },
  { abbreviation: 'VAT', label: 'Holy See (Vatican City State)' },
  { abbreviation: 'VCT', label: 'Saint Vincent and the Grenadines' },
  { abbreviation: 'VEN', label: 'Venezuela' },
  { abbreviation: 'VGB', label: 'British Virgin Islands' },
  { abbreviation: 'VIR', label: 'US Virgin Islands' },
  { abbreviation: 'VNM', label: 'Vietnam' },
  { abbreviation: 'VUT', label: 'Vanuatu' },
  { abbreviation: 'WLF', label: 'Wallis and Futuna' },
  { abbreviation: 'WSM', label: 'Samoa' },
  { abbreviation: 'YEM', label: 'Yemen, Rep' },
  { abbreviation: 'ZAF', label: 'South Africa' },
  { abbreviation: 'ZMB', label: 'Zambia' },
  { abbreviation: 'ZWE', label: 'Zimbabwe' },
];