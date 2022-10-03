export const elementParameters = {
  "PRCP": ["mm", "Precipitation", 10], // Precipitation (1/10 mm)
  "SNOW": ["mm", "Snowfall", 1], // Snowfall (mm)
  "SNWD": ["mm", "Snow depth", 1], // Snow depth (mm)
  "TMAX": ["°C", "Maximum temperature", 10], // Max temperature (1/10 °C)
  "TMIN": ["°C", "Minimum temperature", 10], // Minimum temperature (1/10 °C)
  "ACMC": ["%", "Average cloudiness midnight to midnight from 30-second ceilometer data", 1],
  "ACMH": ["%", "Average cloudiness midnight to midnight from manual observations", 1],
  "ACSC": ["%", "Average cloudiness sunrise to sunset from 30-second ceilometer data", 1],
  "ACSH": ["%", "Average cloudiness sunrise to sunset from manual observations", 1],
  "ADPT": ["°C", "Average Dew Point Temperature for the day", 1],
  "ASLP": ["hPa", "Average Sea Level Pressure for the day", 1/10], // (hPa * 10)
  "ASTP": ["hPa", "Average Station Level Pressure for the day", 1/10], // (hPa * 10)
  "AWBT": ["°C", "Average Wet Bulb Temperature for the day (tenths of degrees C)", 10], // (1/10 °C)
  "AWDR": ["°", "Average daily wind direction", 1],
  "AWND": ["m/s", "Number of days included in the multiday evaporation total", 10], // (1/10 m/sec)
  "DAEV": ["days", "Number of days included in the multiday precipiation total", 1], // days included for MDEV
  "DAPR": ["days", "Number of days included in the multiday snowfall total", 1], // days included for MDPR
  "DASF": ["days", "Number of days included in the multiday minimum temperature", 1],// days included for MDSF
  "DATN": ["days", "Number of days included in the multiday maximum temperature", 1], // days included in MDTN
  "DATX": ["days", "Number of days included in the multiday wind movement", 1], // days included in MDTX
  "DAWM": ["days", "Number of days included in the multiday wind movement", 1], // days included in MDWM
  "DWPR": ["days", "Number of days with non-zero precipitation included in multiday precipitation total", 1], // days included in MDPR
  "EVAP": ["mm", "Evaporation of water from evaporation pan", 10], // (1/10 mm)
  "FMTM": ["HHMM", "Time of fastest mile or fastest 1-minute wind", 1], // time of fastest mile or fastest 1-minute wind
  "FRGB": ["cm", "Base of frozen ground layer", 1],
  "FRGT": ["cm", "Top of frozen ground layer", 1],
  "FRTH": ["cm", "Thickness of frozen ground layer", 1],
  "GAHT": ["cm", "Difference between river and gauge height", 1],
  "MDEV": ["mm", "Multiday evaporation total", 10], // (1/10 mm)
  "MDPR": ["mm", "Multiday precipitation total", 1], // (1/10 mm)
  "MDSF": ["mm", "Multiday snowfall total", 1], // no units included, assuming mm, multiday snowfall total
  "MDTN": ["°C", "Multiday minimum temperature", 1],
  "MDTX": ["°C", "Multiday maximum temperature", 1],
  "MDWM": ["km", "Multiday wind movement", 1],
  "MNPN": ["°C", "Daily minimum temperature of water in an evaporation pan", 1], // (1/10 °C)
  "MXPN": ["°C", "Daily maximum temperatre of water in an evaporation pan", 1], // (1/10 °C)
  "PGTM": ["HHMM", "Peak gust time", 1],
  "PSUN": ["%", "Daily percent of possible sunshine", 1],
  "RHAV": ["%", "Average relative humidity for the day", 1],
  "RHMN": ["°C", "Minimum relative humidity for the day", 1],
  "RHMX": ["°C", "Maximum relative humidity for the day", 1],
  "SN*#": ["°C", "Minimum soil temperature, where * corresponds to a code for ground cover and # corresponds to a code for soil depth.\n\nGround cover codes include the following:\n0 = unknown\n1 = grass\n2 = fallow\n3 = bare ground\n4 = brome grass\n5 = sod\n6 = straw multch\n7 = grass muck\n8 = bare muck\n\nDepth codes include the following:\n1 = 5 cm\n2 = 10 cm\n3 = 20 cm\n4 = 50 cm\n = 100 cm\n6 = 150 cm\n7 = 180 cm", 10], // (1/10 °C)
  "SX*#": ["°C", "Maximum soil temperature, where * corresponds to a code for ground cover and # corresponds to a code for soil depth.\n\nGround cover codes include the following:\n0 = unknown\n1 = grass\n2 = fallow\n3 = bare ground\n4 = brome grass\n5 = sod\n6 = straw multch\n7 = grass muck\n8 = bare muck\n\nDepth codes include the following:\n1 = 5 cm\n2 = 10 cm\n3 = 20 cm\n4 = 50 cm\n = 100 cm\n6 = 150 cm\n7 = 180 cm", 10], // (1/10 °C)
  "TAVG": ["°C", "Average temperature\n\n[Note that TAVG from source 'S' corresponds to an average for the period ending at 2400 UTC rather than local midnight]", 10], // (1/10 °C)
  "THIC": ["mm", "Thickness of ice on water", 10], // (1/10 mm)
  "TOBS": ["°C", "Temperature at the time of observation", 1],
  "TSUN": ["minutes", "Daily total sunshine", 1],
  "WDF1": ["°", "Direction of fastest 1-minute wind", 1],
  "WDF2": ["°", "Direction of fastest 2-minute wind", 1],
  "WDF5": ["°", "Direction of fastest 5-minute wind", 1],
  "WDFG": ["°", "Direction of peak wind gust", 1],
  "WDFI": ["°", "Direction of highest instantaneous wind", 1],
  "WDFM": ["°", "Fastest mile wind direction", 1],
  "WDMV": ["km", "24-hour wind movement", 1],
  "WESD": ["mm", "Water equivalent of snow on the ground", 10], // (1/10 mm)
  "WESF": ["mm", "Water equivalent of snowfall", 10], // (1/10 mm)
  "WSF1": ["m/s", "Fastest 1-minute wind speed", 10], // (1/10 m/s)
  "WSF2": ["m/s", "Fastest 2-minute wind speed", 10], // (1/10 m/s)
  "WSF5": ["m/s", "Fastest 5-minute wind speed", 10], // (1/10 m/s)
  "WSFG": ["m/s", "Peak gust wind speed", 10], // (1/10 m/s)
  "WSFI": ["m/s", "Highest instantaneous wind speed", 10], // (1/10 m/s)
  "WSFM": ["m/s", "Fastest mile wind speed", 10], // (1/10 m/s)
  "WT**": ["", "Weather Type where ** has one of the following values:\n01 = Fog, ice fog, or freezing fog(may include heavy fog)\n02 = Heavy fog or heaving freezing fog (not always distinquished from fog)\n03 = Thunder\n04 = Ice pellets, sleet, snow pellets, or small hail\n05 = Hail (may include small hail)\n06 = Glaze or rime\n07 = Dust, volcanic ash, blowing dust, blowing sand, or blowing obstruction\n08 = Smoke or haze\n09 = Blowing or drifting snow\n10 = Tornado, waterspout, or funnel cloud\n11 = High or damaging winds\n12 = Blowing spray\n13 = Mist\n14 = Drizzle\n15 = Freezing drizzle\n16 = Rain (may include freezing rain, drizzle, and freezing drizzle)\n17 = Freezing rain\n18 = Snow, snow pellets, snow grains, or ice crystals\n19 = Unknown source of precipitation\n21 = Ground fog\n22 = Ice fog or freezing fog", 1],
  "WV**": ["", "Weather in the Vicinity where ** has one of the following values:\n01 = Fog, ice fog, or freezing fog (may include heavy fog)\n03 = Thunder\n07 = Ash, dust, sand, or other blowing obstruction\n18 = Snow or ice crystals\n20 = Rain or snow shower", 1],
}

// If value is missing = -9999

export const mFlagParameters = {
  "": "no measurement information applicable",
  "B": "precipitation total formed from two 12-hour totals",
  "D": "precipitation total formed from four six-hour totals",
	"H": "represents highest or lowest hourly temperature (TMAX or TMIN) or the average of hourly values (TAVG)",
	"K": "converted from knots",
	"L": "temperature appears to be lagged with respect to reported hour of observation",
  "O": "converted from oktas",
	"P": "identified as \"missing presumed zero\" in DSI 3200 and 3206",
  "T": "trace of precipitation, snowfall, or snow depth",
	"W": "=converted from 16-point WBAN code (for wind direction)"
}

export const qFlagParameters = {
  "": "did not fail any quality assurance check",
  "D": "failed duplicate check",
  "G": "failed gap check",
  "I": "failed internal consistency check",
  "K": "failed streak/frequent-value check",
	"L": "failed check on length of multiday period",
  "M": "failed megaconsistency check",
  "N": "failed naught check",
  "O": "failed climatological outlier check",
  "R": "failed lagged range check",
  "S": "failed spatial consistency check",
  "T": "failed temporal consistency check",
  "W": "temperature too warm for snow",
  "X": "failed bounds check",
	"Z": "flagged as a result of an official Datzilla investigation"
}

export const sFlagParameters = {
  "": "No source (i.e., data value missing)",
  "0": "U.S. Cooperative Summary of the Day (NCDC DSI-3200)",
  "6": "CDMP Cooperative Summary of the Day (NCDC DSI-3206)",
  "7": "U.S. Cooperative Summary of the Day -- Transmitted via WxCoder3 (NCDC DSI-3207)",
  "A": "U.S. Automated Surface Observing System (ASOS) real-time data (since January 1, 2006)",
	"a": "Australian data from the Australian Bureau of Meteorology",
  "B": "U.S. ASOS data for October 2000-December 2005 (NCDC DSI-3211)",
	"b": "Belarus update",
	"C": "Environment Canada",
	"D": "Short time delay US National Weather Service CF6 daily summaries provided by the High Plains Regional Climate Center",
	"E": "European Climate Assessment and Dataset (Klein Tank et al., 2002)",
  "F": "U.S. Fort data",
  "G": "Official Global Climate Observing System (GCOS) or other government-supplied data",
  "H": "High Plains Regional Climate Center real-time data",
  "I": "International collection (non U.S. data received through personal contacts)",
  "K": "U.S. Cooperative Summary of the Day data digitized from paper observer forms (from 2011 to present)",
  "M": "Monthly METAR Extract (additional ASOS data)",
	"m": "Data from the Mexican National Water Commission (Comision National del Agua -- CONAGUA)",
	"N": "Community Collaborative Rain, Hail,and Snow (CoCoRaHS)",
	"Q": "Data from several African countries that had been \"quarantined\", that is, withheld from public release until permission was granted from the respective meteorological services",
  "R": "NCEI Reference Network Database (Climate Reference Network and Regional Climate Reference Network)",
  "r": "All-Russian Research Institute of Hydrometeorological Information-World Data Center",
  "S": "Global Summary of the Day (NCDC DSI-9618)\n\nNOTE: \"S\" values are derived from hourly synoptic reports exchanged on the Global Telecommunications System (GTS). Daily values derived in this fashion may differ significantly from \"true\" daily data, particularly for precipitation (i.e., use with caution).",
	"s": "China Meteorological Administration/National Meteorological Information Center/Climatic Data Center (http://cdc.cma.gov.cn)",
  "T": "SNOwpack TELemtry (SNOTEL) data obtained from the U.S. Department of Agriculture's Natural Resources Conservation Service",
	"U": "Remote Automatic Weather Station (RAWS) data obtained from the Western Regional Climate Center",
	"u": "Ukraine update",
	"W": "WBAN/ASOS Summary of the Day from NCDC's Integrated Surface Data (ISD).",
  "X": "U.S. First-Order Summary of the Day (NCDC DSI-3210)",
	"Z": "Datzilla official additions or replacements",
	"z": "Uzbekistan update"
}