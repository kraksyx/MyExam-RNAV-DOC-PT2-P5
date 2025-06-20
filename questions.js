const questions = [
  {
    "question": "The main factor which affects the maximum range of a pulse radar is:",
    "options": [
      "the size of the radar screen",
      "the frequency of the radar transmission",
      "the aerial system size",
      "the pulse repetition frequency"
    ],
    "correct": 3
  },
  {
    "question": "What most determines a primary radar's ability to accurately determine target range:",
    "options": [
      "Aerial rpm",
      "Beam width",
      "Transmitter power",
      "Pulse length"
    ],
    "correct": 3
  },
  {
    "question": "The advantages of CW radar systems over pulse radar systems are:",
    "options": [
      "they are more reliable",
      "the transmitter/receiver aerial system is smaller and less complex",
      "there is no minimum range",
      "they offer better long range performance"
    ],
    "correct": 2
  },
  {
    "question": "The main factor which determines the minimum range that can be measured by a pulsed radar is pulse:",
    "options": [
      "repetition rate",
      "amplitude",
      "length",
      "frequency"
    ],
    "correct": 2
  },
  {
    "question": "The main advantage of a slotted scanner is:",
    "options": [
      "reduces side lobes and directs more energy into the main beam",
      "removes the need for azimuth slaving",
      "side lobe suppression",
      "can produce simultaneous map and weather information"
    ],
    "correct": 0
  },
  {
    "question": "A radar facility transmitting at a Pulse Recurrence Frequency (PRF) of 1200 pulses/second will have a maximum unambiguous range of approximately:",
    "options": [
      "135 NM",
      "69 NM",
      "270 NM",
      "27 NM"
    ],
    "correct": 1
  },
  {
    "question": "If the pulse length used in a radar is 4 microseconds, ignoring receiver recovery time, the minimum range at which a target can be detected is:",
    "options": [
      "1200 metres",
      "2400 metres",
      "600 metres",
      "0 metres"
    ],
    "correct": 2
  },
  {
    "question": "The interval in time between the commencement of two consecutive pulses is:",
    "options": [
      "Aerial rpm",
      "Beam interval",
      "Pulse length",
      "pulse recurrence period"
    ],
    "correct": 3
  },
  {
    "question": "The azimuth and elevation of the satellites is:",
    "options": [
      "determined by the satellite and transmitted to the receiver",
      "determined by the receiver from the satellite almanac data",
      "transmitted by the satellite as part of the almanac",
      "transmitted by the satellite as part of the almanac"
    ],
    "correct": 1
  },
  {
    "question": "The function of the receiver in the GNSS user segment is to:",
    "options": [
      "Interrogate the satellites to determine range",
      "Track the satellites to calculate time",
      "Track the satellites to calculate range",
      "Determine position and assess the accuracy of that position"
    ],
    "correct": 2
  },
  {
    "question": "The task of the control segment is to:",
    "options": [
      "determine availability to users",
      "monitor the SV ephemeris and clock",
      "apply selective availability",
      "all of the above"
    ],
    "correct": 1
  },
  {
    "question": "The preferred GNSS receiver for airborne application is:",
    "options": [
      "multiplex",
      "multi-channel",
      "sequential",
      "fast multiplex"
    ],
    "correct": 1
  },
  {
    "question": "The size of a target on a primary radar screen is governed in azimuth by i) and in range by (ii):",
    "options": [
      "(i) Pulse width; (ii) Pulse length",
      "(i) Pulse length; (ii) Beam width",
      "(i) Pulse width; (ii) Beam width",
      "(i) Beam width; (ii) Pulse length"
    ],
    "correct": 3
  },
  {
    "question": "Short range aerodrome radars will have ____ wave lengths:",
    "options": [
      "millimetric",
      "centimetric",
      "decametric",
      "metric"
    ],
    "correct": 1
  },
  {
    "question": "Which is the most suitable radar for measuring short ranges:",
    "options": [
      "millimetric pulse",
      "continuous wave primary",
      "centimetric pulse",
      "continuous wave secondary"
    ],
    "correct": 1
  },
  {
    "question": "The definition of a radar display will be best with:",
    "options": [
      "\"Wide beam width and wide pulse width\"",
      "\"Wide beam width and narrow pulse width\"",
      "\"Narrow beam width and narrow pulse width\"",
      "\"Narrow beam width and wide pulse width\""
    ],
    "correct": 2
  },
  {
    "question": "A radio facility transmits on a wave length of 2.22 cm. The facility could be a ___ operating on a frequency of ___",
    "options": [
      "VDF; 135 MHz",
      "DME; 1350 MHz",
      "Doppler; 13500 MHz",
      "radio altimeter; 13500 MHz"
    ],
    "correct": 2
  },
  {
    "question": "A radar has a PRF of 800 pps. What is the maximum theoretical range and the PRP?",
    "options": [
      "325 nm, 0.0125 micro seconds",
      "325 nm, 1250 micro seconds",
      "187.5 km, 0.0125 micro seconds",
      "187.5 km, 1250 micro seconds"
    ],
    "correct": 3
  },
  {
    "question": "What is the minimum PRI for a radar with a design range of 200 NM?",
    "options": [
      "1000 microseconds",
      "2470 microseconds",
      "4800 microseconds",
      "3300 microseconds"
    ],
    "correct": 1
  },
  {
    "question": "The pulse recurrence frequency of a signal having a pulse interval (pulse recurrence period) of 5 microseconds is:",
    "options": [
      "6 MHz",
      "200 KHz",
      "60 MHz",
      "2000 KHz"
    ],
    "correct": 1
  },
  {
    "question": "The beam width from a parabolic reflector aerial is:",
    "options": [
      "dependant on the transmitted pulse length",
      "dependant on the transmitted pulse repetition frequency",
      "dependant on the transmitted pulse repetition interval",
      "dependant on the transmitted frequency"
    ],
    "correct": 3
  },
  {
    "question": "In a Cathode Ray Tube the grid is used to:",
    "options": [
      "control the focus",
      "control the brilliance",
      "drain electrons from the tube",
      "deflect the electron stream to form a time-base"
    ],
    "correct": 1
  },
  {
    "question": "In a cathode ray tube the grid potential is:",
    "options": [
      "negative with respect to the cathode",
      "the same as the cathode",
      "zero",
      "the same as the second anode"
    ],
    "correct": 0
  },
  {
    "question": "What technique is employed by primary radar employing a single aerial dish:",
    "options": [
      "Pulse technique",
      "Continuous wave",
      "Phase comparison",
      "Pseudo random noise"
    ],
    "correct": 0
  },
  {
    "question": "If a radar has a beam width of 3\u00b0 and a pulse length of 4 micro seconds, the target azimuth resolution at a range of 60 NM will be approximately:",
    "options": [
      "4 NM",
      "3 NM",
      "2 NM",
      "1 NM"
    ],
    "correct": 1
  },
  {
    "question": "An area surveillance radar is most likely to use a frequency of:",
    "options": [
      "350 MHz",
      "600 MHz",
      "100 Hz",
      "150 Hz"
    ],
    "correct": 1
  },
  {
    "question": "In which of the following meteorological conditions would you expect to encounter an increased distance to the radar horizon:",
    "options": [
      "surface inversion of temperature and humidity",
      "surface steep lapse rate of temperature and humidity",
      "a steep lapse rate of temperature with an inversion of humidity",
      "an inversion of temperature with a steep lapse rate of humidity"
    ],
    "correct": 3
  },
  {
    "question": "If a radar pulse contains 300 cycles of RF energy at a frequency of 600 MHz, the physical length of the pulse is:",
    "options": [
      "1550 metres",
      "150 metres",
      "1.5 metres",
      "0.15 metres"
    ],
    "correct": 1
  },
  {
    "question": "A wavelength of 8.5 mm corresponds to a frequency of:",
    "options": [
      "2833.3 MHz",
      "35294 MHz",
      "3529.4 MHz",
      "28333 MHz"
    ],
    "correct": 1
  },
  {
    "question": "To increase the maximum theoretical range of a pulse radar system:",
    "options": [
      "reduce the PRF and increase the power",
      "increase the PRF and reduce the power",
      "reduce the PRF and increase the PRF",
      "maintain the PRF and increase the power"
    ],
    "correct": 0
  },
  {
    "question": "The frequency of an SSR ground transmission is:",
    "options": [
      "950 +/- 0.2 Mhz",
      "1030 +/- 0.2 Mhz",
      "1090 +/- 0.2 Mhz",
      "750 +/- 0.2 Mhz"
    ],
    "correct": 1
  }
];