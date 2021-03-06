/* jshint esversion:6 */
function Button(options) {
  const button = this;
  init(options);
  return button;


  function init(options) {
    button.callback = () => { return null;};
    button.size = button.defineSize(options);
    button.styles = button.defineStyles(options);

    button.group = button.addGroup(options.where);
    button.rect = button.addRect();
    button.text = button.addText(options.text);

    if(options.coordinates !== undefined) {
      button
        .move(options.coordinates);
    }

  }
}

/* jshint esversion:6 */
function hitterConfig() {
  let sections = [{
      "name": "Value",
      "tables": [{
        "name": "Fangraphs",
        "headerType": "worse-better",
        "rows": [{
          "key": "totalFWar",
          "display": "fWAR",
          "description": "Full Season Wins Above Replacement.",
          "source": "Fangraphs",
        }, {
          "key": "offensiveFWar",
          "display": "oWAR",
          "description": "Offensive WAR Component",
          "source": "Fangraphs"
        }, {
          "key": "defensiveFWar",
          "display": "dWAR",
          "description": "Defensive fWAR Component",
          "source": "Fangraphs"
        }]
      }, {
        "name": "Baseball Reference",
        "headerType":"worse-better",
        "rows":[]
      }]
    }, {
      "name": "Hitting Overview",
      "tables": [{
        "name":"Overview",
        "headerType": "worse-better",
        "rows": [{
          "key": "wOBA",
          "display": "wOBA",
          "description": "Weighted On-Base Average.",
          "source": "Fangraphs"
        }, {
          "key": "weightedRunsCreated",
          "display": "wRC",
          "description": "Weighted Runs Created",
          "source": "Fangraphs"
        }, {
          "key": "weightedRunsAboveAverage",
          "display": "wRAA",
          "description": "Weighted Runs Above Average",
          "source": "Fangraphs"
        }, {
          "key": "onBasePlusSlugging",
          "display": "OPS",
          "description": "On Base Plus Slugging",
          "source": "Fangraphs"
        }, {
          "key": "iso",
          "display": "ISO",
          "description": "Isolated Power",
          "source": "Fangraphs"
        }]
      }]
    }, {
    //   "name": "Run Prevention",
    //   "tables":[]
    // }, {
      "name": "Batted Ball Outcomes",
      "tables": [{
          "name": "Overview",
          "headerType": "less-more",
          "rows": [{
            "key": "babip",
            "display": "BABIP",
            "description": "Batting Average on Balls in Play.",
            "source": "Fangraphs"
          }, {
            "key": "homerunFlyballPercentage",
            "display": "HR / FB",
            "description": "Ratio of Home Runs per Fly Ball",
            "source": "Fangraphs"
          }, {
            "key": "groundballFlyballRatio",
            "display": "GB / FB",
            "description": "Groundball to Flyball ratio.",
            "source": "Fangraphs"
          }]
        },

        {
          "name": "By Hit Type",
          "headerType": "never-always",
          "rows": [{
            "key": "groundBallPercentage",
            "display": "Groundball",
            "description": "Percentage of balls in play that were groundballs.",
            "source": "Fangraphs",
            "scaleMin":0,
            "scaleMax":100
          }, {
            "key": "flyballPercentage",
            "display": "Flyball",
            "description": "Percentage of balls in play that were flyballs.",
            "source": "Fangraphs",
            "scaleMin":0,
            "scaleMax":100
          },{
            "key": "infieldFlyballPercentage",
            "display": "Infield Fly",
            "description": "Percentage of balls hit in play that were infield flies.",
            "source": "Fangraphs",
            "scaleMin":0,
            "scaleMax":100
          }, {
            "key": "lineDrivePercentage",
            "display": "Line Drive",
            "description": "Percentage of balls in play that were Line Drives.",
            "source": "Fangraphs",
            "scaleMin":0,
            "scaleMax":100
          }, {
            "key": "infieldHitPercentage",
            "display": "Infield Hit",
            "description": "Percentage of balls in play that were infield hits.",
            "source": "Fangraphs",
            "scaleMin":0,
            "scaleMax":100
          }, {
            "key": "buntHitPercentage",
            "display": "Bunt Hit",
            "description": "Percentage of balls in play that were bunt hits.",
            "source": "Fangraphs",
            "scaleMin":0,
            "scaleMax":100
          }, ]
        },

        {
          "name": "Hit Strength",
          "headerType": "never-always",
          "rows": [{
            "key": "softHitPercentage",
            "display": "Soft Hits",
            "description": "Percentage of batted balls characterized as 'soft'.",
            "source": "Fangraphs",
            "scaleMin":0,
            "scaleMax":100
          }, {
            "key": "mediumHitPercentage",
            "display": "Medium Hits",
            "description": "Percentage of batted balls characterized as 'medium'.",
            "source": "Fangraphs",
            "scaleMin":0,
            "scaleMax":100
          }, {
            "key": "hardHitPercentage",
            "display": "Hard Hits",
            "description": "Percentage of batted balls characterized as 'hard'.",
            "source": "Fangraphs",
            "scaleMin":0,
            "scaleMax":100
          }, ]
        }, {
          "name": "By Field Area",
          "headerType": "never-always",
          "rows": [{
            "key": "pullPercentage",
            "display": "Pull",
            "description": "Percentage of batted balls hit to the pull field.",
            "source": "Fangraphs",
            "scaleMin":0,
            "scaleMax":100
          }, {
            "key": "centerfieldHitPercentage",
            "display": "Center",
            "description": "Percentage of batted balls hit to center field.",
            "source": "Fangraphs",
            "scaleMin":0,
            "scaleMax":100
          }, {
            "key": "oppositeFieldHitPercentage",
            "display": "Opposite",
            "description": "Percentage of batted balls hit to the opposite field.",
            "source": "Fangraphs",
            "scaleMin":0,
            "scaleMax":100
          }, ]
        }
      ]
    }, {
      "name": "Batting Approach",
      "tables": [{
        "name":"Zone",
        "headerType": "never-always",
        "rows": [{
          "description": "Rate that hitter swung on pitches outside the strike zone.",
          "display": "Outside Zone Swing",
          "key": "outsideZoneSwingPercentage",
          "source": "fangraphs",
          "scaleMin":0,
          "scaleMax":100
        }, {
          "description": "Contact rate on pitches swung at outside the strike zone.",
          "display": "Outside Zone Contact Rate",
          "key": "outsideZoneContactRate",
          "source": "fangraphs",
          "scaleMin":0,
          "scaleMax":100
        }, {
          "description": "Rate that hitter swung on pitches inside the strike zone.",
          "display": "Inside Zone Swing Rate",
          "key": "insideZoneSwingPercentage",
          "source": "fangraphs",
          "scaleMin":0,
          "scaleMax":100
        }, {
          "description": "Contact rate on pitches swung at inside the strike zone.",
          "display": "Inside Zone Contact Rate",
          "key": "insideZoneContactRate",
          "source": "fangraphs",
          "scaleMin":0,
          "scaleMax":100
        }, {
          "description": "Percent of times hitter swung at first-pitch strikes.",
          "display": "First Strike Swing %",
          "key": "firstPitchStrikePercentageSeen",
          "source": "fangraphs",
          "scaleMin":0,
          "scaleMax":100
        }, {
          "description": "Percent of swinging strikes. (Whiff Rate)",
          "display": "Swinging Strike %",
          "key": "swingingStrikePercentage",
          "source": "fangraphs",
          "scaleMin":0,
          "scaleMax":100
        }, {
          "description": "Overall rate that hitter swung at all pitches.",
          "display": "Total Swing %",
          "key": "totalSwingPercentage",
          "source": "fangraphs",
          "scaleMin":0,
          "scaleMax":100
        }, {
          "description": "Overall contact rate on swings.",
          "display": "Total Contact Rate",
          "key": "totalContactRate",
          "source": "fangraphs",
          "scaleMin":0,
          "scaleMax":100
        }, {
          "description": "Overall rate of pitches seen inside the strike zone.",
          "display": "Pitches Seen in Zone",
          "key": "pitchesSeenInZoneRate",
          "source": "fangraphs",
          "scaleMin":0,
          "scaleMax":100
        }]
      }],
    },
    {
      "name": "Baserunning",
      "tables": [{
        "name":"Baserunning Overview",
        "headerType": "worse-better",
        "rows": [{
          "description": "Fangraphs' Baserunning metric.",
          "display": "Fangraphs BsR",
          "key": "BsR",
          "source": "fangraphs"
        }, {
          "description": "Ultimate Baserunning metric.",
          "display": "Ultimate Baserunning",
          "key": "ultimateBaseRunning",
          "source": "fangraphs"
        }, {
          "description": "Speed Score.",
          "display": "Speed Score",
          "key": "speedScore",
          "source": "fangraphs"
        }, {
          "description": "Weighted stolen bases.",
          "display": "Weighted Stolen Bases",
          "key": "weightedStolenBases",
          "source": "fangraphs"
        }, {
          "description": "Weighted ground into double plays metric.",
          "display": "Weighted GIDP",
          "key": "weightedGidp",
          "source": "fangraphs"
        }]
      }]
    }, {
      "name": "Pitch Values",
      "tables": [{
        "name":"Pitch Type",
        "headerType": "worse-better",
        "rows": [{
          "description": "Relative number of runs for hitter facing fastballs (per 100 pitches).",
          "display": "Fastball",
          "key": "fastballRunsAboveAveragePerHundredPitches",
          "source": "fangraphs"
        }, {
          "description": "Relative number of runs for hitter facing sliders (per 100 pitches).",
          "display": "Slider",
          "key": "sliderRunsAboveAveragePerHundredPitches",
          "source": "fangraphs"
        }, {
          "description": "Relative number of runs for hitter facing cutters (per 100 pitches).",
          "display": "Cutter",
          "key": "cutterRunsAboveAveragePerHundredPitches",
          "source": "fangraphs"
        }, {
          "description": "Relative number of runs for hitter facing curveballs (per 100 pitches).",
          "display": "Curve",
          "key": "curveballRunsAboveAveragePerHundredPitches",
          "source": "fangraphs"
        }, {
          "description": "Relative number of runs for hitter facing changeups (per 100 pitches).",
          "display": "Change",
          "key": "changeupRunsAboveAveragePerHundredPitches",
          "source": "fangraphs"
        }, {
          "description": "Relative number of runs for hitter facing splitters (per 100 pitches).",
          "display": "Splitter",
          "key": "splitFingerRunsAboveAveragePerHundredPitches",
          "source": "fangraphs"
        }, {
          "description": "Relative number of runs for hitter facing Knuckleballs (per 100 pitches).",
          "display": "Knuckleball",
          "key": "knuckleballRunsAboveAveragePerHundredPitches",
          "source": "fangraphs"
        }]
      }]
    }
  ];

  return sections;

}

function HitterConfig() {
  const config = this;
  init();
  return config;

  function init() {
    config.totalValue = config.defineTotalValue();
    config.batting = config.defineBatting();
    config.runPrevention = config.defineRunPrevention();
    config.baseRunning = config.defineBaseRunning();

    config.tables = [
      {
        "name":"Total Value",
        "tables":config.totalValue,
        "description":"Measures of the player's total contribution to his team."
      },
      {
        "name":"Batting",
        "description":"Measures of the player's batting contributions to his team.",
        "tables":config.batting
      },
  ];
  }
}

/* jshint esversion:6 */
function LineChart(options) {
  const chart = this;

  init(options);

  return chart;

  function init(options) {
    chart.where = options.where;
    chart.size = options.size;
    chart.margins = options.margins;
    chart.origin = options.origin;

    chart.styles = chart.defineStyles();
    chart.layers = chart.addLayers();
    chart.referencePoints = chart.defineReferencePoints();

    chart.yAxisTitle = chart.addYAxisTitle();
    chart.xAxisTitle = chart.addXAxisTitle();

    chart.scales = chart.defineScales();

    chart.axes = chart.addAxes();

    chart.currentWARType = "bWar";
    chart.currentView = "similarPlayers";
    

    chart.lineGenerator = chart.createLineGenerator();
    chart.areaGenerator = chart.createAreaGenerator();

    chart.zeroLine = chart.addZeroLine();
    chart.zeroText = chart.addZeroText();
    chart.starterLine = chart.addStarterLine();
    chart.starterText = chart.addStarterText();
    chart.allStarLine = chart.addAllStarLine();
    chart.allStarText = chart.addAllStarText();
    chart.mvpLine = chart.addMVPLine();
    chart.mvpText = chart.addMvpText();

    chart.contractLine = chart.addContractLine();
    chart.contractText = chart.addContractText();
    chart.contractCircles = chart.addContractCircles();

  }



}

/* jshint esversion:6 */
function ModelSlider(options) {
  const slider = this;

  init(options);

  return slider;

  function init(options) {
    slider.domain = options.domain;
    slider.currentValue = options.domain[0];

    slider.callbacks = slider.defineCallbacks(options);
    slider.formatter = slider.defineFormatter(options);
    slider.coordinates = slider.defineCoordinates(options);
    slider.size = slider.defineSize(options);
    slider.margins = slider.defineMargins(options);
    slider.styles = slider.defineStyles(options);

    slider.referencePoints = slider.defineReferencePoints();
    slider.scale = slider.defineScale(options.domain);

    slider.group = slider.addGroup(options.where);
    slider.layers = slider.addLayers();

    slider.track = slider.addTrack();
    slider.activeTrack = slider.addActiveTrack();
    slider.circleGroup = slider.addCircleGroup();
    slider.highlightCircle = slider.addHighlightCircle();
    slider.circle = slider.addCircle();
    slider.labelGhost = slider.addTextGhost();
    slider.labelText = slider.addTextLabel();
    slider.heading = slider.addHeading(options.labelText);

    slider.updateValue(slider.currentValue);

    slider.dragLock = false;

  }
}

/* jshint esversion:6 */
function Modeler(options) {
  const modeler = this;

  init(options);

  return modeler;

  function init(options) {
    modeler.tooltip = options.tooltip;
    modeler.player = options.player;
    modeler.name = options.name;
    modeler.size = modeler.defineSize(options.size);
    modeler.chartMargins = modeler.defineChartMargins(options.chartMargins);
    modeler.svg = modeler.addSvg(options.where);
    modeler.referencePoints = modeler.defineReferencePoints();
    modeler.layers = modeler.addLayers();
    modeler.title = modeler.addTitle();
    modeler.subtitle = modeler.addSubtitle();
    modeler.warFormulation = modeler.addWARFormulation();
    modeler.BBRefWARButton = modeler.addBBRefWARButton();
    modeler.fangraphsWARButton = modeler.addFangraphsWARButton();
    modeler.projectionType = modeler.addProjectionType();
    modeler.similarPlayersButton = modeler.addSimilarPlayersButton();
    modeler.agingCurvesButton = modeler.addAgingCurvesButton();
    modeler.paneHint = modeler.addPaneHint();
    modeler.rightPane = modeler.addRightPane();
    modeler.paneContractDetails = modeler.addPaneContractDetails();
    modeler.projectedSurplusHeading = modeler.addProjectedSurplusHeading();
    modeler.projectedSurplusValue = modeler.addProjectedSurplusValue();
    modeler.contractValueHeading = modeler.addContractValueHeading();
    modeler.contractValueLabel = modeler.addContractValueLabel();

    modeler.currentEditView = "salary";

    modeler.chart = modeler.addChart();

    modeler.salaryButton = modeler.addEditSalaryButton();
    modeler.winValueButton = modeler.addEditMarketValueButton();

    modeler.contractYearsSlider = modeler.addContractYearsSlider();
    modeler.salaryChartGroup = modeler.addSalaryChartGroup();
    modeler.winChartGroup = modeler.addWinChartGroup();


    modeler.key = modeler.addModelerKey();
    modeler.pane = modeler.addModelerPane();
    modeler.projectionValueData = {};
  }

}

/* jshint esversion:6 */
ModelerKey = function(options) {
  let key = this;

  init(options);

  return key;

  function init(options) {

    key.styles = key.defineStyles(options);
    key.size = key.defineSize(options);
    key.position = {"x":66.67,"y":425};

    key.group = key.addGroup(options.where);
    key.playerHistory = key.addPlayerHistory();
    key.playerProjections = key.addPlayerProjections();
    key.similarPlayers = key.addSimilarPlayers();
    key.errorRange = key.addErrorRange();
    key.contractValue = key.addContractValue();

    key.visibleKeys = key.defineVisibleKeys();

    key
      .hideContractValue();

    key
      .layout();

  }
};

/* jshint esversion:6 */
function ModelerPane(options) {
  const pane = this;

  init(options);

  return pane;

  function init(options) {

    pane.parent = options.parent;

    pane.styles = pane.defineStyles(options);

    pane.size = pane.defineSize(options);
    pane.referencePoints = pane.defineReferencePoints(options);

    pane.contractValues = pane.defineContractValues();
    pane.contractLength = 3;

    pane.group = pane.addGroup(options.where);
    pane.rect = pane.addRect();
    pane.title = pane.addTitle();

    pane.durationLabel = pane.addContractDurationLabel();
    pane.durationDescription = pane.addContractDescription();
    pane.contractSlider = pane.addContractYearsSlider();

    pane.salaryLabel = pane.addSalaryLabel();
    pane.salaryDescription = pane.addSalaryDescription();
    pane.salarySlider = pane.addSalarySlider();

    // pane.winValueSliders = [];
    pane.marketValueLabel = pane.addMarketValueLabel();
    pane.marketValueDescription = pane.addMarketValueDescription();
    // pane.winValueTable = pane.addWinValueTable();


    pane.salaryGroup = pane.addSalaryGroup();
    pane.salaryChart = pane.addSalaryChart();

    pane.winValueGroup = pane.addWinValueGroup();
    pane.winValueChart = pane.addWinValueChart();



    pane.saveButton = pane.addSaveButton();

    pane.updateContractYears();


  }

}

/* jshint esversion:6 */

function Numberline(options) {
  let chart = this;

  init(options);

  return chart;

  function init(options) {
    chart.options = options;

    chart.size = chart.defaultSize(options);
    chart.margins = chart.defaultMargins(options);
    chart.styles = chart.defaultStyles(options);
    chart.referencePoints = chart.defineReferencePoints();
    chart.svg = chart.addSvg(options.where);
    chart.layers = chart.addLayers(chart.svg);
    chart.bottomLine = chart.addBottomLine();
    chart.scale = chart.defineScale(options);


    chart.backgroundCircleMouseover = () => {  };
    chart.backgroundCircleMouseout = () => {  };

    chart.handleBackgroundCircleMouseover = function(datum) { chart.backgroundCircleMouseover(d3.select(this),datum); };
    chart.handleBackgroundCircleMouseout = function(datum) { chart.backgroundCircleMouseout(d3.select(this),datum); };

  }


}

/* jshint esversion:6 */
function NumberlineReference(options) {
  const chart = this;

  init(options);

  return chart;

  function init(options) {
    chart.playerName = options.name;
    chart.svg = chart.addSvg(options.where);
    chart.styles = chart.defineStyles();
    chart.bottomLine = chart.addBottomLine();
    chart.labels = chart.defineLabels(options.type);
    chart.leftText = chart.addLeftText();
    chart.rightText = chart.addRightText();
    chart.circleKey = chart.addCircleKey();
    chart.qualifierKey = chart.addQualifierKey();
  }

}

function PitcherConfig() {
  const config = this;
  init();
  return config;

  function init() {

    config.totalValue = config.defineTotalValue();
    config.pitchingOutcomes = config.definePitchingOutcomes();
    // config.pitchDetails = config.definePitchDetails();


    config.tables = [
      {
        "name":"Total Value",
        "tables":config.totalValue,
        "description":"Measures of the pitcher's total contribution to his team."
      },
      {
        "name":"Pitching Outcomes",
        "description":"Measures of the player's pitching results.",
        "tables":config.pitchingOutcomes
      },
      // {
      //   "name":"Pitch Details",
      //   "description":"Specific measures of individual pitches and tendencies",
      //   "tables":config.pitchDetails
      // }
  ];

  }
}

/* jshint esversion:6 */
function Player(options,tooltip) {
  const player = this;
  init(options,tooltip);
  return player;

  function init(options,tooltip) {

    d3.select("#loadingRegion")
      .style("display","block");

    player.metadata(options);
    player.tooltip = tooltip;

    player.comparePlayers = false;

    player.stats = player.getStats();
    player.config = player.getConfig();

    d3.select("#mainHeaderTextSpan")
      .html(player.Name);

  }

}

/* jshint esversion:6 */
function PlayerMenu(loadCallback) {
  const menu = this;

  init();

  return menu;

  function init() {
    menu.currentSort = "";
    menu.currentSortOrder = "";
    menu.filters = menu.defineFilters();
    menu.loadCallback = loadCallback;
    d3.csv("playerMenu.csv")
      .then((players) => {
        menu.showTable(menu,players,loadCallback);
        menu.sort("3yearZips");
      });
  }


}

/* jshint esversion:6 */
function PlayerTable(player) {
  const table = this;

  init(player);

  return table;

  function init(player) {

    table.numberlines = {};
    table.sparklines = [];

    table.player = player;
    table.container = table.addContainer();
    table.sections = table.addSections();
    table.sectionHeadings = table.addSectionHeadings();
    table.subSections = table.addSubSections();
    table.subSectionHeadings = table.addSubSectionHeadings();
    table.subSectionTables = table.addSubSectionTables();

    table.subSectionRows = table.addSubSectionRows();
    table.metricNames = table.addMetricNames();
    table.metricNumberlineCells = table.addMetricNumberlineCells();
    table.playerMetricValueCells = table.addPlayerMetricValueCells();
    table.playerMetricSparkline = table.addPlayerMetricSparkline();

    Object.keys(table.numberlines).forEach((key) => {
      let thisNumberline = table.numberlines[key];
      let datum = thisNumberline.datum;


      if(datum.hasOwnProperty("shareScale")) {
        let minValues = [];
        let maxValues = [];

        minValues.push(thisNumberline.numberline.getDomain()[0]);
        maxValues.push(thisNumberline.numberline.getDomain()[1]);

        datum.shareScale.forEach((line) => {
          let currentLine = table.numberlines[line].numberline;

          minValues.push(currentLine.getDomain()[0]);
          maxValues.push(currentLine.getDomain()[1]);

        });

        let least = d3.min(minValues);
        let most = d3.max(maxValues);

        let newDomain = [least,most];


        thisNumberline.numberline
          .rescale(newDomain);

        datum.shareScale.forEach((line) => {
          table.numberlines[line].numberline
            .rescale(newDomain);


        })

      };



      if(datum.hasOwnProperty("scalePercentage")) {
        thisNumberline.numberline
          .scalePercentage();
      }



    });
  }
}

/* jshint esversion:6 */
function Projection(data) {
  let projection = this;

  init(data);

  return projection;

  function init(data) {
    projection.data = data;
    projection.baseAge = projection.getBaseAge();
    projection.warCurveDeltas = projection.defineWarCurveDeltas();
    projection.relevantWarCurveDeltas = projection.getRelevantWarCurveDeltas();
    projection.baseBWar = projection.getBaseBWar();
    projection.threeYearBWar = projection.getThreeYearBWar();
    projection.bWarAgingCurveProjection = projection.getBWarAgingCurveProjection();
    projection.bWarSimilarPlayersRawData = projection.getBWarSimilarPlayersRawData();
    projection.bWarSimilarPlayersMax = projection.getBWarSimilarPlayersMax();
    projection.bWarSimilarPlayersMin = projection.getBWarSimilarPlayersMin();
    projection.bWarSimilarPlayersMean = projection.getBWarSimilarPlayersMean();
    projection.threeYearFWar = projection.getThreeYearFWar();
    projection.fWarAgingCurveProjection = projection.getFWarAgingCurveProjection();
    projection.fWarSimilarPlayersRawData = projection.getFWarSimilarPlayersRawData();
    projection.fWarSimilarPlayersMax = projection.getFWarSimilarPlayersMax();
    projection.fWarSimilarPlayersMin = projection.getFWarSimilarPlayersMin();
    projection.fWarSimilarPlayersMean = projection.getFWarSimilarPlayersMean();

  }
}

/* jshint esversion:6 */
function Slider(options) {
  const slider = this;

  init(options);

  return slider;

  function init(options) {
    slider.labelText = options.label;
    slider.significantDigits = slider.defaulter(options.significantDigits,2);
    slider.domain = slider.defaulter(options.domain,[0,1]);
    slider.currentValue = slider.defaulter(options.defaultValue,1);
    slider.dragLock = false;

    slider.dragCallback = () => { };

    slider.group = slider.addGroup(options.where);
    slider.layers = slider.addLayers();
    slider.size = slider.defineSize(options.size);
    slider.margins = slider.defineMargins(options.margins);
    slider.layout = slider.defineLayout(options.layout);
    slider.styles = slider.defineStyles();
    slider.referencePoints = slider.defineReferencePoints(options.leftLabel);


    slider.scale = slider.defineScale();

    slider.datum = {"name":"","value":slider.currentValue};

    slider.label = slider.addLabel();
    slider.track = slider.addSliderTrack();
    slider.valueLabel = slider.addValueLabel();

    slider.move(options.coordinates);

    slider.dragFunctions = slider.defineDragFunctions();
    slider.circle = slider.addSlidingCircle();
    slider.glowCircle = slider.addGlowCircle();

    slider.circleMouseover = () => {};
    slider.circleMouseout = () => {};


  }
}

/* jshint esversion:6 */
function Sparkline(options) {
  let spark = this;

  init(options);

  return spark;

  function init(options) {

    spark.where = options.where;
    spark.data = options.data;
    spark.yDomain = spark.defaulter(options.yDomain,[-2,10]);
    spark.size = spark.defineSize();
    spark.margins = spark.defineMargins();
    spark.referencePoints = spark.defineReferencePoints();
    spark.scales = spark.defineScales();
    spark.styles = spark.defineStyles();
    spark.areaGenerator = spark.defineAreaGenerator();

    spark.svg = spark.addSvg(spark.where);
    spark.zeroLine = spark.addZeroLine();
    spark.line = spark.addLine();
    spark.circles = spark.addCircles();

  }
}

/* jshint esversion:6 */
function StatsSection(options) {
  const section = this;

  init(options);

  return section;

  function init(options) {
    section.div = section.addDiv(options.where);
    section.header = section.addHeader(options.name);
    section.tables = section.addTables(options);
  }
  
}

/* jshint esversion:6 */

function StatsTable(options) {
  const table = this;

  init(options);

  return table;

  function init(options) {
    table.container = table.addContainer(options.where);
    table.header = table.addHeader(options.name);
    table.tableElement = table.addTableElement(options.where);
    table.headerRow = table.addTableHeaderRow(options);
    table.rows = options.rows;
    table.rowElements = table.generateRowElements(table.rows);
  }

}

/* jshint esversion:6 */

function StatsTableRow(options) {
  const tableRow = this;

  init(options);

  return this;

  function init(options) {

    tableRow.options = options;

    tableRow.rowElement = tableRow.addRowElement(options.where);
    tableRow.name = tableRow.addNameCell(tableRow.rowElement);
    tableRow.numberline = tableRow.addNumberline(tableRow.rowElement);
    tableRow.playerValue = tableRow.addPlayerValue(tableRow.rowElement);
    tableRow.sparkLine = tableRow.addSparkline(tableRow.rowElement);

  }


}

/* jshint esversion:6 */
function TextLabel(options) {
  const label = this;

  init(options);

  return label;

  function init(options) {
    label.bWar = options.bWar;
    label.fWar = options.fWar;
    label.age = options.age;
    label.values = options.values;
    label.text = options.text;
    label.styles = label.defineStyles(options);
    label.group = label.addGroup(options.where);
    label.background = label.addBackground(options);
    label.foreground = label.addForeground(options);
  }
}

/* jshint esversion:6 */

function Tooltip(options) {
  const tooltip = this;

  init(options);

  return tooltip;

  function init(options) {
    tooltip.div = tooltip.createDiv(options.where);
  }

}

/* jshint esversion:6 */
function WinChart(options) {
  const chart = this;

  init(options);

  return chart;

  function init(options) {
    chart.data = options.data;
    chart.domain = options.domain;
    chart.changeCallback = (() => { });
    chart.callbacks = options.callbacks ? options.callbacks : {};

    chart.styles = chart.defineStyles(options);
    chart.size = chart.defineSize(options);
    chart.margins = chart.defineMargins(options);

    chart.referencePoints = chart.defineReferencePoints();
    chart.scales = chart.defineScales();
    chart.lineGenerator = chart.createLineGenerator();

    chart.group = chart.addGroup(options.where);
    chart.layers = chart.addLayers();

    chart.axes = chart.addAxes();
    chart.line = chart.addLine();
    chart.circles = chart.addCircles();

    chart.yearHighlight = chart.addYearHighlight();

    chart.dragLock = false;

  }
}

/* jshint esversion:6 */
Button.prototype.addGroup = function(where) {
  const button = this;
  let group;

  group = where
    .append("g")
    .attr("cursor","pointer")
    .on('mouseover',function() { button.mouseover(); })
    .on('mouseout',function() { button.mouseout(); })
    .on('click',function() { button.mouseclick(); });

  return group;
};

/* jshint esversion:6 */
Button.prototype.addRect = function() {
  const button = this;

  let rect = button.group
    .append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("height",button.size.height)
    .attr("width",button.size.width)
    .attr("fill",button.styles.backgroundColor)
    .attr("stroke",button.styles.stroke)
    .attr("strokeWidth",button.styles.strokeWidth);

  return rect;
}

/* jshint esversion:6 */
Button.prototype.addText = function(text) {
  const button = this;
  let label;


  label = new TextLabel({
    "where":button.group,
    "foregroundColor":button.styles.foregroundColor,
    "backgroundColor":button.styles.backgroundColor,
    "fontFamily":button.styles.fontFamily,
    "fontWeight":button.styles.fontWeight,
    "text":text
  }).show()
  .move({
    "x":button.size.width / 2,
    "y":button.size.height / 2
  });

  return label;
};

/* jshint esversion:6 */
Button.prototype.defineSize = function(options) {
  const button = this;
  let size = defaulter(options.size,{});
  size.width = defaulter(size.width,100);
  size.height = defaulter(size.height,50);

  return size;

  function defaulter(setValue,defaultValue) {
    return setValue !== undefined ? setValue : defaultValue;
  }
};

/* jshint esversion:6 */
Button.prototype.defineStyles = function(options) {
  const button = this;
  let styles = defaulter(options.styles,{});

  styles.backgroundFill = defaulter(styles.backgroundFill,"orange");
  styles.stroke = defaulter(styles.stroke,"blue");
  styles.strokeWidth = defaulter(styles.strokeWidth,2);

  styles.fontFamily = defaulter(styles.fontFamily,"Source Sans Pro");
  styles.fontWeight = defaulter(styles.fontWeight,"bold");
  styles.fontForeground = defaulter(styles.fontForeground,"white");
  styles.fontBackground = defaulter(styles.fontBackground,"back");

  return styles;

  function defaulter(setValue,defaultValue) {
    return setValue !== undefined ? setValue: defaultValue;
  }
}

/* jshint esversion: 6*/
Button.prototype.mouseclick = function() {
  const button = this;

  button.callback();

  return button;
};

/* jshint esversion:6 */
Button.prototype.mouseout = function() {
  const button = this;

  // Add style changes for mouseout

  return button;
};

/* jshint esversion:6 */
Button.prototype.mouseover = function() {
  const button = this;

  // Add style changes for mouseover

  return button;
};

/* jshint esversion:6 */
Button.prototype.hide = function() {
  const button = this;

  button.group
    .attr("display","none");

  return button;
}

/* jshint esversion:6 */
Button.prototype.move = function(coordinates) {
  const button = this;

  button.group
    .attr("transform","translate("+coordinates.x+","+coordinates.y+")");

  return button;
}

/* jshint esversion:6 */
Button.prototype.registerCallback = function(callback) {
  const button = this;

  button.callback = callback;

  return button;
};

/* jshint esversion:6 */
Button.prototype.show = function() {
  const button = this;

  button.group
    .attr("display","block");

  return button;
}

/* jshint esversion:6 */
HitterConfig.prototype.defineBBRefValue = function() {
  const config = this;

  let group = {
    "heading":"Baseball-Reference",
    "description":"Total contribution data from Baseball-Reference.com",
    "metrics":[]
  };

  group.metrics.push({
    "isHeader":true,
    "headerType":"fewer-wins-more-wins",
    "startGroup":true
  });

  group.metrics.push({
    "key":"bWar",
    "display":"WAR",
    "description":"Baseball-Reference Wins Above Replacement. Measures total player contribution in terms of marginal team wins.",
    "source":"Baseball-Reference",
    "startGroup":true,
    "endGroup":true
  });

  group.metrics.push({
    "isSpacer":true
  });


  group.metrics.push({
    "isHeader":true,
    "headerType":"fewer-runs-more-runs",
    "startGroup":true
  });


  group.metrics.push({
    "key":"bOWar",
    "display":"Offense",
    "description":"Baseball-Reference Offensive Component. Measures player's offensive contribution in terms of marginal team wins.",
    "source":"Baseball-Reference",
    "relatedToNext":true,
    "startGroup":true,
    "shareScale":["bDWar"]
  });

  group.metrics.push({
    "key":"bDWar",
    "display":"Defense",
    "description":"Baseball-Reference Defensive Component. Measures players defensive contribution in terms of marginal team wins.",
    "source":"Baseball-Reference",
    "endGroup":true
  });

  return group;
}

/* jshint esversion:6 */
HitterConfig.prototype.defineBaseRunning = function() {
  const config = this;
  let group;

  group = {
    "display":"Baserunning",
    "description":"Measures of player's overall contribution to team offense via baserunning."
  };

  let subGroups = [runPreventionTable()];

  return subGroups;

  function runPreventionTable() {
    let group = {
      "metrics":[]
    };

    group.metrics.push({
      "key":"baserunning_runs_above_average",
      "display":"Runs Above Average",
      "description":"Total baserunning runs added above average.",
      "source":"Fangraphs",
    });

    group.metrics.push({
      "key":"ultimate_base_running",
      "display":"UBR",
      "description":"Baserunning value in runs aside from caught stealing and stolen bases.",
      "source":"Fangraphs",
    });

    group.metrics.push({
      "key":"speed_score",
      "display":"Speed Score",
      "description":"Relative player speed.",
      "source":"Fangraphs",
    });

    group.metrics.push({
      "key":"gidp_above_runs",
      "display":"GIDP",
      "description":"Runs saved by avoiding grounding into double plays.",
      "source":"Fangraphs",
    });





  }
};

/* jshint esversion:6 */
HitterConfig.prototype.defineBatting = function() {
  const config = this;
  let group;

  group = {
    "display":"Batting",
    "description":"Measures of player's batting contributions."
  };

  let subGroups = [config.defineBattingOverview(),config.defineBattingResults(),config.defineBattingApproach()];

  return subGroups;
};

/* jshint esversion:6 */
HitterConfig.prototype.defineBattingApproach = function() {
  const config = this;
  let group;

  group = {
    "heading":"Batting Approach",
    "description":"Measures of hitter's approach and discipline.",
    "metrics":[]
  };

  group.metrics.push({
    "isHeader":true,
    "headerType":"never-always",
    "startGroup":true
  });


  group.metrics.push({
    "key":"walk_rate",
    "display":"BB%",
    "description":"Percentage of at-bats resulting in non-intentional walks.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "scalePercentage":true,
    "startGroup":true
  });

  group.metrics.push({
    "key":"strikeout_rate",
    "display":"K%",
    "description":"Percentage of at-bats resulting in strikeouts.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "endGroup":true
  });

  group.metrics.push({
    "isSpacer":true
  });


  group.metrics.push({
    "isHeader":true,
    "headerType":"strikeouts-walks",
    "startGroup":true
  });

  group.metrics.push({
    "key":"walk_strikeout_ratio",
    "display":"BB:K",
    "description":"Walk to strikeout ratio.",
    "source":"Fangraphs",
    "startGroup":true,
    "endGroup":true
  });

  group.metrics.push({
    "isSpacer":true
  });


  group.metrics.push({
    "isHeader":true,
    "headerType":"never-always",
    "startGroup":true
  });

  group.metrics.push({
    "key":"total_contact_rate",
    "display":"Total Contact",
    "description":"Hitter's total contact rate on swings.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "scalePercentage":true,
    "startGroup":true
  });

  group.metrics.push({
    "key":"swinging_strike_percentage",
    "display":"Swinging Strike Rate",
    "description":"Hitter's total contact rate on swings.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true
  });

  group.metrics.push({
    "key":"outside_zone_swing_percentage",
    "display":"Outside Swing",
    "description":"Percentage of time batter swung at pitches outside the strike zone.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true
  });


  group.metrics.push({
    "key":"inside_zone_swing_percentage",
    "display":"Inside Swing",
    "description":"Percentage of time batter swung at pitches inside the strike zone.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "endGroup":true
  });


  return group;

}

/* jshint esversion:6 */
HitterConfig.prototype.defineBattingOverview = function() {
  const config = this;
  let group;

  group = {
    "heading":"Batting Overview",
    "description":"Total contribution data from Fangraphs",
    "metrics":[]
  };

  group.metrics.push({
    "isHeader":true,
    "headerType":"less-production-more-production",
    "startGroup":true
  });

  group.metrics.push({
    "key":"weighted_on_base_average",
    "display":"wOBA",
    "description":"Weighted On-Base Average. Measures run expectancy from offensive contributions",
    "source":"Fangraphs",
    "relatedToNext":true,
    "shareScale":["expected_weighted_on_base_average"],
    "startGroup":true
  });

  group.metrics.push({
    "key":"expected_weighted_on_base_average",
    "display":"Expected wOBA",
    "description":"Expected Weighted On-Base Average. Attempts to correct wOba for luck.",
    "source":"Baseball Savant",
    "endGroup":true,
  });

  group.metrics.push({
    "isSpacer":true
  });


  // group.metrics.push({
  //   "key":"expected_weighted_on_base_average_on_contact",
  //   "display":"xWoba (Contact)",
  //   "description":"Expected Weighted On-Base Average on contact. Measures quality of contact on a wOba scale.",
  //   "source":"Baseball Savant"
  // });

  group.metrics.push({
    "isHeader":true,
    "headerType":"more-outs-fewer-outs",
    "startGroup":true
  });

  group.metrics.push({
    "key":"on_base_average",
    "display":"On Base Average",
    "description":"On Base Average. Measures rate of reaching base per plate appearance.",
    "source":"Fangraphs",
    "startGroup":true,
    "endGroup":true
  });

  group.metrics.push({
    "isSpacer":true
  });

  group.metrics.push({
    "key":"",
    "display":"",
    "description":"",
    "source":"",
    "isHeader":true,
    "headerType":"worst-best",
    "startGroup":true
  });

  group.metrics.push({
    "key":"slugging",
    "display":"Slugging",
    "description":"Slugging Average. Measures total bases per at-bat.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "shareScale":["expected_slugging"]
  });

  group.metrics.push({
    "key":"expected_slugging",
    "display":"Expected Slugging",
    "description":"Expected Slugging Average. Attempts to correct slugging average for luck.",
    "source":"Baseball Savant",
    "endGroup":true
  });

  group.metrics.push({
    "isSpacer":true
  });


  group.metrics.push({
    "isHeader":true,
    "headerType":"less-power-more-power",
    "startGroup":true
  });

  group.metrics.push({
    "key":"iso",
    "display":"Isolated Power",
    "description":"Isolated Power. Measures slugging beyond singles.",
    "source":"Fangraphs",
    "endGroup":true
  });

  group.metrics.push({
    "isSpacer":true
  });


  group.metrics.push({
    "isHeader":true,
    "headerType":"worst-best",
    "startGroup":true
  });

  group.metrics.push({
    "key":"batting_average",
    "display":"Batting Average.",
    "description":"Measures hits per at-bats.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "shareScale":["expected_batting_average","batting_average_on_balls_in_play"],
    "startGroup":true
  });

  group.metrics.push({
    "key":"expected_batting_average",
    "display":"Expected Batting Average",
    "description":"Controls batting average for luck.",
    "source":"Baseball Savant",
    "relatedToNext":true,
  });


  group.metrics.push({
    "key":"batting_average_on_balls_in_play",
    "display":"BABIP",
    "description":"Batting Average on Balls in Play. Highly-variable measure that may indicate luck in batting.",
    "source":"Fangraphs",
    "endGroup":true
  });

  return group;
}

/* jshint esversion:6 */
HitterConfig.prototype.defineBattingResults = function() {
  const config = this;

  let group = {
    "heading":"Batting Results",
    "description":"Measures of the results of the player's hitting.",
    "metrics":[]
  };

  group.metrics.push({
    "isHeader":true,
    "headerType":"slower-faster-hits"
  });

  group.metrics.push({
    "key":"average_exit_velocity",
    "display":"Exit Velocity",
    "description":"Average velocity of balls hit in play.",
    "source":"Baseball Savant",
    "startGroup":true,
    "endGroup":true
  });

  group.metrics.push({
    "isSpacer":true
  });

  group.metrics.push({
    "isHeader":true,
    "headerType":"lower-higher",
    "startGroup":true
  });

  group.metrics.push({
    "key":"average_launch_angle",
    "display":"Launch Angle",
    "description":"Average launch angle of balls hit in play.",
    "source":"Baseball Savant",
    "startGroup":true,
    "endGroup":true
  });

  group.metrics.push({
    "isSpacer":true
  });

  group.metrics.push({
    "isHeader":true,
    "headerType":"groundballs-flyballs",
    "startGroup":true
  });

  group.metrics.push({
    "key":"groundballs_per_flyball",
    "display":"GB/FB",
    "description":"Ground balls per fly ball",
    "source":"Fangraphs",
    "startGroup":true,
    "endGroup":true
  });

  group.metrics.push({
    "isSpacer":true
  });

  group.metrics.push({
    "isHeader":true,
    "headerType":"never-always",
    "startGroup":true
  });

  group.metrics.push({
    "key":"line_drive_rate",
    "display":"Line Drive",
    "description":"Fly ball percentage.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "scalePercentage":true,
    "startGroup":true,
  });


  group.metrics.push({
    "key":"fly_ball_rate",
    "display":"Fly Balls",
    "description":"Fly ball percentage.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true
  });

  group.metrics.push({
    "key":"ground_ball_rate",
    "display":"Ground Ball",
    "description":"Ground ball percentage.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "endGroup":true
  });

  group.metrics.push({
    "isSpacer":true
  });

  group.metrics.push({
    "isHeader":true,
    "headerType":"never-always",
    "startGroup":true
  });

  group.metrics.push({
    "key":"strong_hits",
    "display":"Strong Hits",
    "description":"Batted balls classified as 'Strong'",
    "source":"Fangraphs",
    "relatedToNext":true,
    "scalePercentage":true,
    "startGroup":true
  });

  group.metrics.push({
    "key":"medium_hits",
    "display":"Medium Hits",
    "description":"Batted balls classified as 'Medium'",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true
  });

  group.metrics.push({
    "key":"weak_hits",
    "display":"Weak Hits",
    "description":"Batted balls classified as 'Weak'",
    "source":"Fangraphs",
    "scalePercentage":true,
    "endGroup":true
  });


  group.metrics.push({
    "isSpacer":true
  });

  group.metrics.push({
    "key":"",
    "display":"",
    "description":"",
    "source":"",
    "isHeader":true,
    "headerType":"never-always",
    "startGroup":true,
    "relatedToNext":true,
  });


  group.metrics.push({
    "key":"pull_field_percentage",
    "display":"Pull",
    "description":"Percentage of batted balls hit to the pull field.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "startGroup":true
  });

  group.metrics.push({
    "key":"center_field_percentage",
    "display":"Center",
    "description":"Percentage of batted balls hit to centerfield.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true
  });

  group.metrics.push({
    "key":"opposite_field_percentage",
    "display":"Opposite",
    "description":"Percentage of batted balls hit to the opposite field.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "endGroup":true
  });




  return group;
}

/* jshint esversion:6 */
HitterConfig.prototype.defineFangraphsValue = function() {
  const config = this;

  let group = {
    "heading":"Fangraphs",
    "description":"Total contribution data from Fangraphs",
    "headingType":"worse-better",
    "metrics":[]
  };

  group.metrics.push({
    "isHeader":true,
    "headerType":"fewer-wins-more-wins",
    "startGroup":true
  });

  group.metrics.push({
    "key":"fWar",
    "display":"WAR",
    "description":"Fangraphs Wins Above Replacement. Measures total player contribution in terms of marginal team wins.",
    "source":"Fangraphs",
    "startGroup":true,
    "endGroup":true
  });

  group.metrics.push({
    "isSpacer":true,
  });

  group.metrics.push({
    "key":"",
    "display":"",
    "description":"",
    "source":"",
    "isHeader":true,
    "headerType":"fewer-runs-more-runs",
    "startGroup":true
  });

  group.metrics.push({
    "key":"fWar_offense",
    "display":"Offensive",
    "description":"Fangraphs Offensive Component. Measures player's offensive contribution in terms of marginal runs produced.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "startGroup":true,
    "shareScale":["fWar_defense"]
  });

  group.metrics.push({
    "key":"fWar_defense",
    "display":"Defensive",
    "description":"Fangraphs Defensive Component. Measures players defensive contribution in terms of marginal runs prevented.",
    "source":"Fangraphs",
    "endGroup":true
  });

  return group;
}

/* jshint esversion:6 */
HitterConfig.prototype.defineRunPrevention = function() {
  const config = this;
  let group;

  group = {
    "heading":"",
    "display":"Run Prevention",
    "description":"Measures of player's overall contribution to run prevention."
  }

  let subGroups = [runPreventionTable()];

  return subGroups;

  function runPreventionTable() {
    let group = {
      "metrics":[]
    };

    group.metrics.push({
      "key":"ultimate_zone_rating_150",
      "display":"UZR / 150",
      "description":"Fangraphs' Ultimate Zone Rating. Measured in runs saved above average per 150 games.",
      "source":"Fangraphs",
      "shareScale":[]
    });

    group.metrics.push({
      "key":"error_runs_saved",
      "display":"Error Runs",
      "description":"Runs saved by avoiding errors relative to average player.",
      "source":"Fangraphs",
      "shareScale":[]
    });

    group.metrics.push({
      "key":"error_runs_saved",
      "display":"Error Runs",
      "description":"Runs saved by avoiding errors relative to average player.",
      "source":"Fangraphs",
      "shareScale":[]
    });

    group.metrics.push({
      "key":"range_runs_saved",
      "display":"Range Runs",
      "description":"Runs saved by fielder's range relative to average player.",
      "source":"Fangraphs",
      "shareScale":[]
    });

    group.metrics.push({
      "key":"double_play_runs_saved",
      "display":"Double Plays",
      "description":"Runs saved by fielder's contribution to double plays relative to average player.",
      "source":"Fangraphs",
      "shareScale":[]
    });



  }
}

/* jshint esversion:6 */
HitterConfig.prototype.defineTotalValue = function() {
  const config = this;
  let group;

  group = {
    "display":"Total Value",
    "description":"Measures of player's overall contribution to team performance."
  }

  let subGroups = [config.defineFangraphsValue(),config.defineBBRefValue()];

  return subGroups;
}

/* jshint esversion:6 */
LineChart.prototype.addAllStarLine = function() {
  let chart = this;
  let line;

  line = chart.layers.axes
    .append("line")
    .attr("stroke",chart.styles.allStarLineStroke)
    .attr("stroke-width",chart.styles.allStarLineStrokeWidth)
    .attr("stroke-dasharray","3,3")
    .attr("x1",chart.scales.x(0))
    .attr("x2",chart.scales.x(chart.scales.x.domain()[1]))
    .attr("y1",chart.scales.y(5))
    .attr("y2",chart.scales.y(5));


  return line;
};

/* jshint esversion:6 */
LineChart.prototype.addAllStarText = function() {
  let chart = this;
  let line;

  line = chart.layers.axes
    .append("text")
    .attr("text-anchor","start")
    .attr("dominant-baseline","middle")
    .text("All-Star")
    .attr("font-size","10pt")
    .attr("fill","#999")
    .attr("cursor","pointer")
    .attr("x",chart.scales.x(chart.scales.x.domain()[1]))
    .attr("y",chart.scales.y(5))
    .on('mouseover',() => {
      chart.tooltip
        .update("Players producting at least <strong>5 WAR</strong> in a season are generally considered to be All-Star candidates.")
        .show()
        .move();

      line
        .attr("fill","black");

      chart.allStarLine
        .attr("stroke","black")
        .attr("stroke-dasharray","1,0");
    })
    .on('mouseout',() =>{
      chart.tooltip
        .hide();

      line
        .attr("fill","#aaa");

      chart.allStarLine
        .attr("stroke","#aaa")
        .attr("stroke-dasharray","3,3");

    })
    .on('mousemove',() => {
      chart.tooltip
        .move();
    });



  return line;
};

/* jshint esversion:6 */
LineChart.prototype.addAxes = function() {
  const chart = this;

  let axes = {};
  axes.x = chart.addXAxis();
  axes.y = chart.addYAxis();

  return axes;
};

/* jshint esversion:6 */
LineChart.prototype.addContractCircles = function() {
  const chart = this;

  let circles = chart.layers.contract
    .selectAll("circle")
    .enter()
    .append("circle")
    .attr("cx",(d) => { return modeler.chart.scales.x(d.age); })
    .attr("cy",(d) => { return modeler.chart.scales.y(d[modeler.chart.currentWARType]); })
    .attr("r",3)
    .attr("fill","white")
    .attr("stroke","black")
    .attr("stroke-width",1)
    .attr("cursor","pointer")
    .on('mouseover',function(d)  {
    })
    .on('mouseout',() => {
    })
    .on('mousemove',() => {
    })
    .exit()
    .remove();



  return circles;
}

/* jshint esversion:6 */
LineChart.prototype.addContractLine = function() {
  const chart = this;

  let line = chart.layers.contract
    .append("path")
    .attr("fill","none")
    .attr("stroke",chart.styles.contractLineStroke)
    .attr("stroke-width",chart.styles.contractLineStrokeWidth)
    .attr("stroke-dasharray",chart.styles.contractLineStrokeDashArray);

  return line;
}

/* jshint esversion:6 */
LineChart.prototype.addContractText = function() {
  const chart = this;

  let text = new TextLabel({
    "where":chart.layers.contract,
    "fontSize":"10pt",
    "fontWeight":"bold",
    "text":"Contract Value",
    "textAnchor":"start",
    "foregroundColor":chart.styles.contractLineStroke,
    "backgroundStroke":"white",
    "outlineWidth":4
  });

  return text;
}

/* jshint esversion:6 */
LineChart.prototype.addLayers = function() {
  const chart = this;

  let layers = {};

  layers.axes = chart.addSingleLayer();
  layers.title = chart.addSingleLayer();
  layers.projectionArea = chart.addSingleLayer();
  layers.backgroundLine = chart.addSingleLayer();
  layers.projection = chart.addSingleLayer();
  layers.foregroundLine = chart.addSingleLayer();
  layers.backgroundLabels = chart.addSingleLayer();
  layers.frontText = chart.addSingleLayer();
  layers.contract = chart.addSingleLayer();

  return layers;

};

/* jshint esversion:6 */
LineChart.prototype.addMVPLine = function() {
  let chart = this;
  let line;

  line = chart.layers.axes
    .append("line")
    .attr("stroke",chart.styles.mvpLineStroke)
    .attr("stroke-width",chart.styles.mvpLineStrokeWidth)
    .attr("stroke-dasharray","3,3")
    .attr("x1",chart.scales.x(0))
    .attr("x2",chart.scales.x(chart.scales.x.domain()[1]))
    .attr("y1",chart.scales.y(8))
    .attr("y2",chart.scales.y(8));

  return line;
};

/* jshint esversion:6 */
LineChart.prototype.addMvpText = function() {
  let chart = this;
  let line;

  line = chart.layers.axes
    .append("text")
    .attr("text-anchor","start")
    .attr("dominant-baseline","middle")
    .text("MVP")
    .attr("font-size","10pt")
    .attr("fill","#999")
    .attr("cursor","pointer")
    .attr("x",chart.scales.x(0))
    .attr("y",chart.scales.y(8))
    .on('mouseover',() => {
      chart.tooltip
        .update("Players producting at least <strong>8 WAR</strong> in a season are generally considered to be MVP candidates.")
        .show()
        .move();

      line
        .attr("fill","black");

      chart.mvpLine
        .attr("stroke","black")
        .attr("stroke-dasharray","1,0");
    })
    .on('mouseout',() =>{
      chart.tooltip
        .hide();

      line
        .attr("fill","#aaa");

      chart.mvpLine
        .attr("stroke","#aaa")
        .attr("stroke-dasharray","3,3");

    })
    .on('mousemove',() => {
      chart.tooltip
        .move();
    });


  return line;
};

/* jshint esversion:6 */
LineChart.prototype.addProjectionArea = function() {
  const chart = this;

  let area = chart.layers.projectionArea
    .append("path")
    .attr("stroke","none")
    .attr("fill",chart.styles.projectionAreaFill);

  return area;

};

/* jshint esversion:6 */
LineChart.prototype.addProjectionCircles = function() {
  const chart = this;

  let projectionCircles = chart.layers.projection
    .selectAll("g")
    .data(chart.projection.bWarSimilarPlayersMean)
    .enter()
    .append("g")
    .attr("transform",function(d,i) {
      return "translate(0,0)"
    })
    .attr("cursor","pointer")
    .on('mouseover',function(d,i) {
      let element = d3.select(this)
      let circle = element.select(".dataCircle");

      circle
        .transition()
        .duration(125)
        .attr("fill",chart.styles.playerYearHighlightFill)
        .attr("r",5);

      let display = chart.playerName + " projects to produce <strong>";
      if(chart.currentWARType == "bWar") {
        display += d.bWar.toFixed(1) + "</strong> Baseball-Reference wins above replacement in his age <strong>";
      } else {
        display += d.fWar.toFixed(1) + "</strong> Fangraphs wins above replacement in his age <strong>";
      }
      display += d.age;
      display += "</strong> season.</div>";

      chart.tooltip
        .update(display)
        .show()
        .move();
    })
    .on('mouseout',function(d,i) {
      let element = d3.select(this);
      let circle = element.selectAll(".dataCircle");

      chart.tooltip
        .hide();

      circle
      circle
        .transition()
        .duration(125)
        .attr("fill",chart.styles.playerYearFill)
        .attr("r",3);

    })
    .on('mousemove',function() {

      chart.tooltip
        .move();

    })

  let hotspots = projectionCircles
    .append("circle")
    .attr("cx",0)
    .attr("cy",0)
    .attr("r",10)
    .attr("fill","rgba(255,255,255,0)")
    .attr("opacity",0);

  let dataCircles = projectionCircles
    .append("circle")
    .classed("dataCircle",true)
    .attr("cx",0)
    .attr("cy",0)
    .attr("fill",chart.styles.playerYearFill)
    .attr("r",3)
    .attr("stroke",chart.styles.playerYearStroke);

  return projectionCircles;
};

/* jshint esversion:6 */
LineChart.prototype.addProjectionLine = function() {
  const chart = this;

  let line;

  line = chart.layers.projection
    .append("path")
    .datum([])
    .attr("stroke",chart.styles.projectionLine)
    .attr("stroke-width",chart.styles.projectionLineStroke)
    .attr("stroke-dasharray","5,5")
    .attr("fill","none")
    .attr("display","none")
    .attr("d",chart.lineGenerator);


  return line;
};

/* jshint esversion:6 */
LineChart.prototype.addSingleLayer = function() {
  const chart = this;

  let layer;

  layer = chart.where
    .append("g");

  return layer;

};

/* jshint esversion:6 */
LineChart.prototype.addStarterText = function() {
  let chart = this;
  let line;

  line = chart.layers.axes
    .append("text")
    .attr("text-anchor","start")
    .attr("dominant-baseline","middle")
    .text("Starter")
    .attr("font-size","10pt")
    .attr("fill","#999")
    .attr("cursor","pointer")
    .attr("x",chart.scales.x(0))
    .attr("y",chart.scales.y(2))
    .on('mouseover',() => {
      chart.tooltip
        .update("Players producting at least <strong>2 WAR</strong> in a season are generally considered to be MLB starter-caliber players.")
        .show()
        .move();

      line
        .attr("fill","black");

      chart.starterLine
        .attr("stroke","black")
        .attr("stroke-dasharray","1,0");
    })
    .on('mouseout',() =>{
      chart.tooltip
        .hide();

      line
        .attr("fill","#aaa");

      chart.starterLine
        .attr("stroke","#aaa")
        .attr("stroke-dasharray","3,3");

    })
    .on('mousemove',() => {
      chart.tooltip
        .move();
    });



  return line;
};

/* jshint esversion:6 */
LineChart.prototype.addTitle = function() {
  const chart = this;

  let title;

  title = chart.layers.title
    .append("text")
    .attr("x",chart.referencePoints.midlineX)
    .attr("y",chart.referencePoints.titleTopY)
    .attr("text-anchor","middle")
    .attr("dominant-baseline","central")
    .attr("font-size",chart.styles.titleFontSize)
    .attr("font-family",chart.styles.titleFontFamily)
    .attr("fill",chart.styles.titleFontFill)
    .attr("font-weight",styles.titleFontWeight)
    .text("Projected WAR");

  return title;

};

/* jshint esversion: 6 */
LineChart.prototype.addXAxis = function() {
  const chart = this;

  let xAxis;

  xAxis = chart.layers.axes
    .append("g")
    .attr("transform","translate(0,"+chart.referencePoints.yMin+")")
    .call(d3.axisBottom(chart.scales.x))
    .attr("font-family",chart.styles.axisFontFamily)
    .attr("font-size",chart.styles.axisFontSize);


  return xAxis;
};

/* jshint esversion:6 */
LineChart.prototype.addXAxisTitle = function() {
  const chart = this;
  let title;

  title = chart.layers.axes
    .append("text")
    .attr("text-anchor","middle")
    .attr("x",chart.referencePoints.midlineX)
    .attr("y",chart.size.height)
    .attr("font-size",chart.styles.axisTitleFontFamily)
    .attr("font-family",chart.styles.axisTitleFontFamily)
    .attr("fill",chart.styles.axisTitleFill)
    .attr("font-weight",chart.styles.axisTitleFontWeight)
    .text("Year (Age)");

  return title;
};

/* jshint esversion: 6 */
LineChart.prototype.addYAxis = function() {
  const chart = this;
  let yAxis;

  let axis = d3.axisLeft(chart.scales.y).ticks(3);

  yAxis = chart.layers.axes
    .append("g")
    .attr("transform","translate("+chart.referencePoints.xMin+",0)")
    .call(axis)
    .attr("font-family",chart.styles.axisFontFamily)
    .attr("font-size",chart.styles.axisFontSize);

  return yAxis;
};

/* jshint esversion:6 */
LineChart.prototype.addYAxisTitle = function() {
  const chart = this;

  let title;

  title = chart.layers.axes
    .append("text")
    .attr("x",chart.margins.left / 2)
    .attr("y",chart.referencePoints.midlineY)
    .attr("font-size",chart.styles.axisTitleFontFamily)
    .attr("font-family",chart.styles.axisTitleFontFamily)
    .attr("fill",chart.styles.axisTitleFill)
    .attr("font-weight",chart.styles.axisTitleFontWeight)
    .attr("text-anchor","end")
    .text("WAR");

  return title;

};

/* jshint esversion:6 */
LineChart.prototype.addZeroLine = function() {
  let chart = this;
  let line;

  line = chart.layers.axes
    .append("line")
    .attr("stroke",chart.styles.zeroLineStroke)
    .attr("stroke-width",chart.styles.zeroLineStrokeWidth)
    .attr("stroke-dasharray","3,3")
    .attr("x1",chart.scales.x(0))
    .attr("x2",chart.scales.x(chart.scales.x.domain()[1]))
    .attr("y1",chart.scales.y(0))
    .attr("y2",chart.scales.y(0));


  return line;
};

/* jshint esversion:6 */
LineChart.prototype.addZeroText = function() {
  let chart = this;
  let line;

  line = chart.layers.axes
    .append("text")
    .attr("text-anchor","start")
    .attr("dominant-baseline","middle")
    .text("Replacement")
    .attr("font-size","10pt")
    .attr("fill","#999")
    .attr("cursor","pointer")
    .attr("x",chart.scales.x(0))
    .attr("y",chart.scales.y(0))
    .on('mouseover',() => {
      chart.tooltip
        .update("Players producting <strong>0 WAR</strong> in a season are replaceable by 'AAAA'-type players.")
        .show()
        .move();

      line
        .attr("fill","black");

      chart.zeroLine
        .attr("stroke","black")
        .attr("stroke-dasharray","1,0");
    })
    .on('mouseout',() =>{
      chart.tooltip
        .hide();

      line
        .attr("fill","#aaa");

      chart.zeroLine
        .attr("stroke","#aaa")
        .attr("stroke-dasharray","3,3");

    })
    .on('mousemove',() => {
      chart.tooltip
        .move();
    });



  return line;
};

/* jshint esversion:6 */
LineChart.prototype.addStarterLine = function() {
  let chart = this;
  let line;

  line = chart.layers.axes
    .append("line")
    .attr("stroke",chart.styles.starterLineStroke)
    .attr("stroke-width",chart.styles.starterLineStrokeWidth)
    .attr("stroke-dasharray","3,3")
    .attr("x1",chart.scales.x(0))
    .attr("x2",chart.scales.x(chart.scales.x.domain()[1]))
    .attr("y1",chart.scales.y(2))
    .attr("y2",chart.scales.y(2));


  return line;
};

/* jshint esversion:6 */
LineChart.prototype.createAreaGenerator = function() {
  const chart = this;
  let generator;

  generator = d3.area()
    .x((d) => { return chart.scales.x(d.age); })
    .y0((d) => { return chart.scales.y(d.min);})
    .y1((d) => { return chart.scales.y(d.max);});

  return generator;
};

/* jshint esversion:6 */
LineChart.prototype.createLineGenerator = function() {
  const chart = this;
  let generator;

  generator = d3.line()
    .x((d) => { return chart.scales.x(d.age);})
    .y((d) => { return chart.scales.y(d[chart.currentWARType]);});

  return generator;
};

/* jshint esversion:6 */
LineChart.prototype.defineReferencePoints = function() {
  const chart = this;

  let referencePoints = {};

  referencePoints.effectiveWidth = chart.size.width - chart.margins.left - chart.margins.right;
  referencePoints.effectiveHeight = chart.size.height - chart.margins.top - chart.margins.bottom;
  referencePoints.midlineX = (referencePoints.effectiveWidth / 2) + chart.margins.left;
  referencePoints.midlineY = (referencePoints.effectiveHeight / 2) + chart.margins.top;
  referencePoints.xAxisTitleTop = chart.size.height - (chart.margins.bottom / 2);
  referencePoints.titleTopY = chart.margins.top / 2;

  referencePoints.xMin = chart.margins.left;
  referencePoints.xMax = chart.margins.left + referencePoints.effectiveWidth;

  referencePoints.yMin = chart.margins.top + referencePoints.effectiveHeight;
  referencePoints.yMax = chart.margins.top;

  return referencePoints;

};

/* jshint esversion:6 */
LineChart.prototype.defineScales = function() {
  const chart = this;

  let scales = {};

  scales.x = d3.scaleLinear()
    .domain([19,35])
    .range([chart.referencePoints.xMin,chart.referencePoints.xMax]);

  scales.y = d3.scaleLinear()
    .domain([-3,12])
    .range([chart.referencePoints.yMin,chart.referencePoints.yMax]);

  return scales;

};

/* jshint esversion:6 */
LineChart.prototype.defineStyles = function() {
  const chart = this;

  let styles = {};

  styles.axisFontFamily = "Source Sans Pro";
  styles.axisFontSize = "10pt";

  styles.titleFontFamily = "Source Sans Pro";
  styles.titleFontSize = "18pt";
  styles.titleFontWeight = "bold";
  styles.titleFill = "black";
  styles.titleStroke = "white";

  styles.axisTitleFill = "black";
  styles.axisTitleFontSize = "0.75em";
  styles.axisTitleFontFamily = "Source Sans Pro";
  styles.axisTitleFontWeight = "bold";

  styles.playerYearFill = "white";
  styles.playerYearStroke = "#20639b";
  styles.playerYearHighlightFill = "#20639b";
  styles.playerYearLine = "#20639b";
  styles.playerYearLineStrokeWidth = 3;
  styles.playerProjectionDashArray = "5,5";
  styles.projectionAreaFill = "rgba(221,221,255,0.75)";
  styles.projectionAreaStroke = "#000";

  styles.compPlayerStroke = "#fafafa";
  styles.compPlayerStrokeWidth = 1;
  styles.compPlayerHighlightStroke = "rgb(22,58,98)";

  styles.projectionLine = "#20639b";
  styles.projectionLineStroke = 3;

  styles.zeroLineStroke = "#333";
  styles.zeroLineStrokeWidth = 2;

  styles.starterLineStroke = "#666";
  styles.starterLineStrokeWidth = 1;

  styles.allStarLineStroke = "#999";
  styles.allStarLineStrokeWidth = 1;

  styles.mvpLineStroke = "#999";
  styles.mvpLineStrokeWidth = 1;

  styles.contractLineStroke = "#ed553b";
  styles.contractLineStrokeWidth = 2;
  styles.contractLineStrokeDashArray = "none";

  return styles;


};

/* jshint esversion: 6 */
LineChart.prototype.addCompData = function(data) {
  const chart = this;

  chart.compPlayers = data;
  chart.compLines = [];
  chart.compCircles = [];
  chart.textLabelGroups = [];
  chart.textLabels = [];

  let allBWarValues = [];
  let allAges = [];

  data.forEach((player) => {
    let group;
    let line;
    let mouseLine;
    let circles;
    let textLabels = [];
    let nameLabel;

    player.bWar.forEach((year) => {
      allBWarValues.push(year.bWar);
      allAges.push(year.age);
    });

    chart
      .updateYScale(d3.extent(allBWarValues))
      .updateXScale(d3.extent(allAges));



    group = chart.layers.backgroundLine
      .append("g")
      .on('mouseenter',function(d,i) {
        let element = line;
        let name = element.attr("data-name");
        element
          .attr("stroke",chart.styles.compPlayerHighlightStroke);

        nameLabel.show();
        textLabels.forEach((label) => {
          label.show();
        });


        circles.attr("fill","steelblue");
      })
      .on('mouseleave',function(d,i) {
        let element = line;

        element
          .attr("stroke","#ddd");

        circles.attr("fill",chart.styles.compPlayerStroke);

        textLabels.forEach((label) => {
          label.hide();
        });
        nameLabel.hide();

      });



    line = group
      .append("path")
      .attr("fill","none")
      .attr("stroke",chart.styles.compPlayerStroke)
      .attr("stroke-width",chart.styles.compPlayerStrokeWidth)
      .datum(player.bWar)
      .attr("d",chart.lineGenerator)
      .attr("cursor","pointer")
      .attr("data-name",player.name)
      .attr("data-labels",textLabels);

    mouseline = group
      .append("path")
      .attr("fill","none")
      .attr("stroke","rgba(0,0,0,0)")
      .attr("stroke-width",8)
      .datum(player.bWar)
      .attr("d",chart.lineGenerator)
      .attr("cursor","pointer");


    circles = group
      .selectAll("circle")
      .data(player.bWar)
      .enter()
      .append("circle")
      .attr("data-name",player.name)
      .attr("cx",(d) => { return chart.scales.x(d.age); })
      .attr("cy",(d) => { return chart.scales.y(d.bWar); })
      .attr("r",2)
      .attr("fill","#ddd")
      .attr("cursor","pointer");



    player.bWar.forEach((year) => {

      let textLabel = new TextLabel({
        "text":year.bWar.toFixed(1),
        "where":group,
        "values":{"x":year.age,"y":year.bWar},
        "foregroundColor":chart.styles.compPlayerHighlightStroke,
        "bWar":year.bWar,
        "fWar":year.fWar,
        "age":year.age
      })
      .move({
        "x":chart.scales.x(year.age),
        "y":chart.scales.y(year.bWar)
      });
      textLabels.push(textLabel);
      chart.textLabels.push(textLabel);


    });

    nameLabel = new TextLabel({
      "text":player.name,
      "where":chart.layers.frontText,
      "values":{"x":player.bWar[player.bWar.length - 1].age - 0.5,"y":player.bWar[player.bWar.length - 1].bWar},
      "foregroundColor":chart.styles.compPlayerHighlightStroke,
      "fontSize":"10pt",
      "backgroundColor":"black",
      "textAnchor":"start"
    })
    .move({
      "x":chart.scales.x(player.bWar[player.bWar.length - 1].age) + 100,
      "y":chart.scales.y(player.bWar[player.bWar.length - 1].bWar)
    });
    chart.textLabels.push(nameLabel);

    chart.compLines.push(line);
    chart.compLines.push(mouseline);
    chart.compCircles.push(circles);

  });

  chart
    .updateXScale()
    .updateYScale();

  return chart;
};

/* jshint esversion:6 */
LineChart.prototype.addData = function(data) {
  const chart = this;


  return chart;
};

/* jshint esversion:6 */
LineChart.prototype.addPlayerData = function(data,playerName) {
  const chart = this;

  chart.playerData = data;
  chart.playerName = playerName;

  chart.playerLine = chart.layers.foregroundLine
    .append("path")
    .datum(data)
    .attr("stroke",chart.styles.playerYearLine)
    .attr("stroke-width",chart.styles.playerYearLineStrokeWidth)
    .attr("fill","none")
    .attr("d",chart.lineGenerator);

  chart.playerGroups = chart.layers.foregroundLine
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("transform",function(d,i) {
      return "translate("+chart.scales.x(d.age)+","+chart.scales.y(d.bWar)+")";
    })
    .attr("cursor","pointer")
    .on('mouseover',function(d,i) {
      let element = d3.select(this);
      let dataCircle = element.select(".dataCircle");

      let display =  chart.playerName + " was worth <strong>";
      if(chart.currentWARType == "bWar") {
        display += d.bWar.toFixed(1) + "</strong> Baseball-Reference wins above replacement in his age " ;
        display += d.age + " season.";
      }

      if(chart.currentWARType == "fWar") {
        display += d.fWar.toFixed(1) + "</strong> Fangraphs wins above replacement in his age " ;
        display += d.age + " season.";
      }

      chart.tooltip
        .update(display)
        .show()
        .move();

      dataCircle
        .transition()
        .duration(125)
        .attr("r",5)
        .attr("fill",chart.styles.playerYearHighlightFill);

    })
    .on('mouseout',function(d,i) {
      let element = d3.select(this);
      let dataCircle = element.select(".dataCircle");

      chart.tooltip
        .hide();

      dataCircle
        .transition()
        .duration(125)
        .attr("r",3)
        .attr("fill",chart.styles.playerYearFill);
    })
    .on('mousemove',function(d,i) {
      chart.tooltip
        .move();
    })

  chart.playerHotspots = chart.playerGroups
    .append("circle")
    .attr("x",0)
    .attr("y",0)
    .attr("r",10)
    .attr("opacity",0)
    .attr("fill","black");

  chart.playerCircles = chart.playerGroups
    .append("circle")
    .attr("cx",0)
    .attr("cy",0)
    .classed("dataCircle",true)
    .attr("fill",chart.styles.playerYearFill)
    .attr("r",3)
    .attr("stroke",chart.styles.playerYearStroke);

    chart.updateXScale();
    chart.updateYScale();


  return chart;
};

/* jshint esversion:6 */
LineChart.prototype.addProjection = function(projection) {
  const chart = this;
  chart.projection = projection;

  chart.projectionLine = chart.addProjectionLine();
  chart.projectionLine
    .datum(projection.bWarSimilarPlayersMean)
    .attr("display","block")
    .attr("d",chart.lineGenerator);


  chart.projectionCircles = chart.addProjectionCircles();

  chart.projectionCircles
    .data(projection.bWarSimilarPlayersMean)
    .attr("cx",(d) => { return chart.scales.x(d.age); })
    .attr("cy",(d) => { return chart.scales.y(d[chart.currentWARType]); });

  chart.projectionArea = chart.addProjectionArea();
  let projectionAreaData = [];

  chart.projection.bWarSimilarPlayersMax.forEach((season,index) => {
    let values = {};
    values.age = season.age;
    values.max = season.bWar;
    values.min = chart.projection.bWarSimilarPlayersMin[index].bWar;
    projectionAreaData.push(values);
  });

  chart.projectionArea
    .datum(projectionAreaData)
    .attr("d",chart.areaGenerator);

  chart.updateXScale();
  chart.updateYScale();

  return chart;
};

/* jshint esversion:6 */
LineChart.prototype.showAgingCurveProjection = function() {
  const chart = this;

  chart.currentView = "agingCurve";

  if(chart.currentWARType === "bWar") {

    chart.projectionArea
      .attr("opacity",1)
      .transition()
      .duration(250)
      .attr("opacity",0)
      .on("end",function() {
        d3.select(this)
          .attr("display","none");
      });

    chart.compLines.forEach((line,index) => {
      line
        .attr("opacity",1)
        .transition()
        .duration(250)
        .attr("opacity",0)
        .on("end",function() {
          d3.select(this)
            .attr("display","none");
        });
    });

    chart.compCircles.forEach((line,index) => {
      line
        .attr("opacity",1)
        .transition()
        .duration(250)
        .attr("opacity",0)
        .on("end",function() {
          d3.select(this)
            .attr("display","none");
        });
    });


    chart.projectionLine
      .datum(chart.projection.bWarAgingCurveProjection)
      .transition()
      .duration(375)
      .delay(175)
      .attr("d",chart.lineGenerator);

    chart.projectionCircles
      .data(chart.projection.bWarAgingCurveProjection)
      .transition()
      .duration(375)
      .delay(175)
      .attr("cx",(d) => { return chart.scales.x(d.age); })
      .attr("cy",(d) => { return chart.scales.y(d.bWar); });
  }

  if(chart.currentWARType === "fWar") {

    chart.projectionArea
      .attr("opacity",1)
      .transition()
      .duration(250)
      .attr("opacity",0)
      .on("end",function() {
        d3.select(this)
          .attr("display","none");
      });

    chart.compLines.forEach((line,index) => {
      line
        .attr("opacity",1)
        .transition()
        .duration(250)
        .attr("opacity",0)
        .on("end",function() {
          d3.select(this)
            .attr("display","none");
        });
    });


    chart.compCircles.forEach((line,index) => {
      line
        .attr("opacity",1)
        .transition()
        .duration(250)
        .attr("opacity",0)
        .on("end",function() {
          d3.select(this)
            .attr("display","none");
        });
    });

    chart.projectionLine
      .datum(chart.projection.fWarAgingCurveProjection)
      .transition()
      .duration(375)
      .delay(175)
      .attr("d",chart.lineGenerator);

    chart.projectionCircles
      .data(chart.projection.fWarAgingCurveProjection)
      .transition()
      .duration(375)
      .delay(175)
      .attr("cx",(d) => { return chart.scales.x(d.age); })
      .attr("cy",(d) => { return chart.scales.y(d.fWar); });

  }

  chart
    .updateXScale()
    .updateYScale();

  return chart;
};

/* jshint esversion:6 */
LineChart.prototype.showBBRefData = function() {
  const chart = this;

  chart.currentWARType = "bWar";
  chart.lineGenerator = chart.createLineGenerator();

  if(chart.currentView === "similarPlayers") {
    chart.playerLine
      .transition()
      .duration(300)
      .attr("d",chart.lineGenerator);

    chart.playerGroups
      .transition()
      .duration(300)
      .attr("transform",function(d) {
        return "translate("+chart.scales.x(+d.age)+","+chart.scales.y(d.bWar)+")";
      });

    chart.projectionLine
      .datum(chart.projection.bWarSimilarPlayersMean)
      .transition()
      .duration(300)
      .attr("d",chart.lineGenerator);

    chart.projectionCircles
      .data(chart.projection.bWarSimilarPlayersMean)
      .transition()
      .duration(300)
      .attr("cx",(d) => { return chart.scales.x(d.age); })
      .attr("cy",(d) => { return chart.scales.y(d[chart.currentWARType]); });

    let projectionAreaData = [];

    chart.projection.bWarSimilarPlayersMax.forEach((season,index) => {
      let values = {};
      values.age = season.age;
      values.max = season.bWar;
      values.min = chart.projection.bWarSimilarPlayersMin[index].bWar;
      projectionAreaData.push(values);
    });


    chart.projectionArea
      .datum(projectionAreaData)
      .transition()
      .duration(300)
      .attr("d",chart.areaGenerator);

    chart.compLines.forEach((line) => {
      line
        .transition()
        .duration(300)
        .attr("d",chart.lineGenerator);
    });

    chart.compCircles.forEach((circleSelection) => {
      circleSelection
        .transition()
        .duration(300)
        .attr("cx",(d) => { return chart.scales.x(d.age); })
        .attr("cy",(d) => { return chart.scales.y(d.bWar); });
    });

    chart.textLabels.forEach((label) => {
      if(label.fWar !== undefined) {
        label
          .updateText(label.bWar)
          .move({
            "x":chart.scales.x(label.age),
            "y":chart.scales.y(label.bWar)
          });
      }
    });


  }

  if(chart.currentView == "agingCurve") {
    chart.playerLine
      .transition()
      .duration(300)
      .attr("d",chart.lineGenerator);

    chart.playerGroups
      .transition()
      .duration(300)
      .attr("transform",function(d) {
        return "translate("+chart.scales.x(+d.age)+","+chart.scales.y(d.bWar)+")";
      });

    chart.projectionLine
      .datum(chart.projection.bWarAgingCurveProjection)
      .transition()
      .duration(300)
      .attr("d",chart.lineGenerator);

    chart.projectionCircles
      .data(chart.projection.bWarAgingCurveProjection)
      .transition()
      .duration(300)
      .attr("cx",(d) => { return chart.scales.x(d.age); })
      .attr("cy",(d) => { return chart.scales.y(d[chart.currentWARType]); });

  }

  chart.updateXScale().updateYScale();

  return chart;
}

/* jshint esversion:6 */
LineChart.prototype.showFangraphsData = function() {
  const chart = this;

  chart.currentWARType = "fWar";
  chart.lineGenerator = chart.createLineGenerator();

  chart.playerLine
    .transition()
    .duration(300)
    .attr("d",chart.lineGenerator);

  chart.playerGroups
    .transition()
    .duration(300)
    .attr("transform",function(d) {
      return "translate("+chart.scales.x(+d.age)+","+chart.scales.y(d.fWar)+")";
    });


  if(chart.currentView === "similarPlayers") {

    chart.projectionLine
      .datum(chart.projection.fWarSimilarPlayersMean)
      .transition()
      .duration(300)
      .attr("d",chart.lineGenerator);

    chart.projectionCircles
      .data(chart.projection.fWarSimilarPlayersMean)
      .transition()
      .duration(300)
      .attr("transform",function(d) {
        return "translate("+chart.scales.x(+d.age)+","+chart.scales.y(d.fWar)+")";
      });

    let projectionAreaData = [];

    chart.projection.fWarSimilarPlayersMax.forEach((season,index) => {
      let values = {};
      values.age = season.age;
      values.max = season.fWar;
      values.min = chart.projection.fWarSimilarPlayersMin[index].fWar;
      projectionAreaData.push(values);
    });

    chart.projectionArea
      .datum(projectionAreaData)
      .transition()
      .duration(300)
      .attr("d",chart.areaGenerator);

    chart.compLines.forEach((line) => {
      line
        .transition()
        .duration(300)
        .attr("d",chart.lineGenerator);
    });

    chart.compCircles.forEach((circleSelection) => {
      circleSelection
        .transition()
        .duration(300)
        .attr("cx",(d) => { return chart.scales.x(d.age); })
        .attr("cy",(d) => { return chart.scales.y(d.fWar); });
    });

    chart.textLabels.forEach((label) => {
      if(label.fWar !== undefined) {
        label
          .updateText(label.fWar)
          .move({
            "x":chart.scales.x(label.age),
            "y":chart.scales.y(label.fWar)
          });
      }
    });


  }


  if(chart.currentView == "agingCurve") {

    chart.projectionLine
      .datum(chart.projection.fWarAgingCurveProjection)
      .transition()
      .duration(300)
      .attr("d",chart.lineGenerator);

    chart.projectionCircles
      .data(chart.projection.fWarAgingCurveProjection)
      .transition()
      .duration(300)
      .attr("cx",(d) => { return chart.scales.x(d.age); })
      .attr("cy",(d) => { return chart.scales.y(d[chart.currentWARType]); });

  }

  chart.updateXScale().updateYScale();
  return chart;
}

/* jshint esversion:6 */
LineChart.prototype.showAgingSimilarPlayersProjection = function() {
  const chart = this;

  chart.currentView = "similarPlayers";

  if(chart.currentWARType == "bWar") {
    chart.projectionArea
      .attr("display","block")
      .transition()
      .duration(250)
      .delay(125)
      .attr("opacity",0)
      .on("end",function() {
        d3.select(this)
          .attr("opacity",1);
      });

    chart.compLines.forEach((line,index) => {
      line
        .attr("display","block")
        .transition()
        .duration(250)
        .delay(125)
        .attr("opacity",0)
        .on("end",function() {
          d3.select(this)
            .attr("opacity",1);
        });
    });

    chart.compCircles.forEach((line,index) => {
      line
        .attr("display","block")
        .transition()
        .duration(250)
        .duration(125)
        .attr("opacity",0)
        .on("end",function() {
          d3.select(this)
            .attr("opacity",1);
        });
    });


    chart.projectionLine
      .datum(chart.projection.bWarSimilarPlayersMean)
      .transition()
      .duration(250)
      .attr("d",chart.lineGenerator);

    chart.projectionCircles
      .data(chart.projection.bWarSimilarPlayersMean)
      .transition()
      .duration(250)
      .attr("cx",(d) => { return chart.scales.x(d.age); })
      .attr("cy",(d) => { return chart.scales.y(d.bWar); });

    chart
      .updateXScale()
      .updateYScale();
  }

  if(chart.currentWARType == "fWar") {

    chart.projectionLine
      .datum(chart.projection.fWarSimilarPlayersMean)
      .transition()
      .duration(300)
      .attr("d",chart.lineGenerator);

    chart.projectionCircles
      .data(chart.projection.fWarSimilarPlayersMean)
      .transition()
      .duration(300)
      .attr("cx",(d) => { return chart.scales.x(d.age); })
      .attr("cy",(d) => { return chart.scales.y(d[chart.currentWARType]); });

    let projectionAreaData = [];

    chart.projection.fWarSimilarPlayersMax.forEach((season,index) => {
      let values = {};
      values.age = season.age;
      values.max = season.fWar;
      values.min = chart.projection.fWarSimilarPlayersMin[index].fWar;
      projectionAreaData.push(values);
    });

    chart.projectionArea
      .attr("display","block")
      .datum(projectionAreaData)
      .transition()
      .duration(300)
      .attr("opacity",1)
      .attr("d",chart.areaGenerator);


    chart.compLines.forEach((line) => {
      line
        .transition()
        .duration(300)
        .attr("opacity",1)
        .attr("display","block")
        .attr("d",chart.lineGenerator);
    });

    chart.compCircles.forEach((circleSelection) => {
      circleSelection
        .transition()
        .duration(300)
        .attr("opacity",1)
        .attr("display","block")
        .attr("cx",(d) => { return chart.scales.x(d.age); })
        .attr("cy",(d) => { return chart.scales.y(d.fWar); });
    });

    chart.textLabels.forEach((label) => {
      if(label.fWar !== undefined) {
        label
          .updateText(label.fWar)
          .move({
            "x":chart.scales.x(label.age),
            "y":chart.scales.y(label.fWar)
          });
      }
    });

  }

  chart.updateXScale().updateYScale();
  return chart;
};

/* jshint esversion:6 */
LineChart.prototype.updateProjectionLines = function(projectionValues) {
  const chart = this;

  chart.projectionLine
    .datum(projectionValues.mean.yearData)
    .attr("d",chart.lineGenerator);

  return chart;
};

/* jshint esversion:6 */

LineChart.prototype.updateXScale = function(newExtent) {
  const chart = this;


  let domain = chart.scales.x.domain();

  let allYears = [];

  chart.playerData.forEach((datum) => {
    allYears.push(datum.age);
  });

  if(chart.compPlayers) {
    chart.compPlayers.forEach((player) => {
      player.bWar.forEach((season) => {
        allYears.push(+season.age);
      });
    });
  }

  if(chart.projection) {
    let years = chart.projection.bWarAgingCurveProjection.map((a) => { return a.age});
    years.forEach((year) => {
      allYears.push(+year);
    });
  }

  chart.scales.x
    .domain(d3.extent(allYears));

  chart.zeroLine
    .attr("x1",chart.scales.x(d3.extent(allYears)[0]))
    .attr("x2",chart.scales.x(d3.extent(allYears)[1]));

  chart.zeroText
    .attr("x",chart.scales.x(d3.extent(allYears)[1]) + 5)

  chart.starterLine
    .attr("x1",chart.scales.x(d3.extent(allYears)[0]))
    .attr("x2",chart.scales.x(d3.extent(allYears)[1]));

  chart.starterText
    .attr("x",chart.scales.x(d3.extent(allYears)[1]) + 5);

  chart.allStarLine
    .attr("x1",chart.scales.x(d3.extent(allYears)[0]))
    .attr("x2",chart.scales.x(d3.extent(allYears)[1]));

  chart.allStarText
    .attr("x",chart.scales.x(d3.extent(allYears)[1]) + 5);

  chart.mvpLine
    .attr("x1",chart.scales.x(d3.extent(allYears)[0]))
    .attr("x2",chart.scales.x(d3.extent(allYears)[1]));

  chart.mvpText
    .attr("x",chart.scales.x(d3.extent(allYears)[1]) + 5);


  chart.playerLine
    .attr("d",chart.lineGenerator);

  if(chart.projection !== undefined) {

    chart.projectionArea
      .attr("d",chart.areaGenerator);

    chart.projectionLine
        .attr("d",chart.lineGenerator);

    chart.projectionCircles
      .attr("transform",function(d) {
        return "translate("+chart.scales.x(d.age)+","+chart.scales.y(d[chart.currentWARType])+")";
      });
  }

  chart.playerGroups
    .attr("transform",function(d) {
      return "translate("+chart.scales.x(d.age)+","+chart.scales.y(d[chart.currentWARType])+")";
    });

  if(chart.compLines) {
    chart.compLines.forEach((line) => {
      line
        .attr("d",chart.lineGenerator);
    });

    chart.textLabels.forEach((label) => {
        label.move({
          "x":chart.scales.x(+label.values.x),
          "y":chart.scales.y(label.values.y)
        });
    });

    chart.compCircles.forEach((circle) => {
      circle
        .attr("cx",(d) => { return chart.scales.x(d.age); });
    });
  }

  chart.axes.x
    .call(d3.axisBottom(chart.scales.x).ticks(5));


  return chart;
};

/* jshint esversion:6 */
LineChart.prototype.updateYScale = function(newExtent) {
  const chart = this;

  let domain = chart.scales.y.domain();

  let allWar = [];

  // if(chart.compPlayers) {
  //   chart.compPlayers.forEach((player) => {
  //     player.bWar.forEach((season) => {
  //       allWar.push(+season.bWar);
  //     });
  //   });
  // }
  //
  //
  // if(chart.projection) {
  //   chart.projection.bWarAgingCurveProjection.map((a) => { return a.bWar}).forEach((value) => { allWar.push(value); });
  //   chart.projection.bWarSimilarPlayersMax.map((a) => { return a.bWar}).forEach((value) => { allWar.push(value); });
  //   chart.projection.bWarSimilarPlayersMin.map((a) => { return a.bWar}).forEach((value) => { allWar.push(value); });
  //   chart.playerData.map((a) => { return a.bWar}).forEach((value) => { allWar.push(value); });
  //
  //   chart.projection.fWarAgingCurveProjection.map((a) => { return a.fWar}).forEach((value) => { allWar.push(value); });
  //   chart.projection.fWarSimilarPlayersMax.map((a) => { return a.fWar}).forEach((value) => { allWar.push(value); });
  //   chart.projection.fWarSimilarPlayersMin.map((a) => { return a.fWar}).forEach((value) => { allWar.push(value); });
  //   chart.playerData.map((a) => { return a.fWar}).forEach((value) => { allWar.push(value); });
  //
  //   chart.zeroLine
  //     .attr("y1",chart.scales.y(0))
  //     .attr("y2",chart.scales.y(0));
  //
  //   chart.zeroText
  //     .attr("y",chart.scales.y(0) + 3);
  //
  //
  //   chart.starterLine
  //     .attr("y1",chart.scales.y(2))
  //     .attr("y2",chart.scales.y(2));
  //
  //   chart.starterText
  //     .attr("y",chart.scales.y(2) + 3);
  //
  //   if(d3.extent(allWar)[1] < 5) {
  //     chart.allStarLine
  //       .attr("display","none");
  //
  //     chart.allStarText
  //       .attr("display","none");
  //
  //   } else {
  //     chart.allStarLine
  //       .attr("display","block");
  //
  //     chart.allStarText
  //       .attr("display","block");
  //   }
  //
  //   chart.allStarLine
  //     .attr("y1",chart.scales.y(5))
  //     .attr("y2",chart.scales.y(5));
  //
  //   chart.allStarText
  //     .attr("y",chart.scales.y(5) + 3);
  //
  //   if(d3.extent(allWar)[1] < 8) {
  //     chart.mvpLine
  //       .attr("display","none");
  //
  //     chart.mvpText
  //       .attr("display","none");
  //   } else {
  //     chart.mvpLine
  //       .attr("display","block");
  //
  //     chart.mvpText
  //       .attr("display","block");
  //   }
  //
  //   chart.mvpLine
  //     .attr("y1",chart.scales.y(8))
  //     .attr("y2",chart.scales.y(8));
  //
  //   chart.mvpText
  //     .attr("y",chart.scales.y(8) + 3);
  //
  //     chart.playerLine
  //       .attr("d",chart.lineGenerator);
  //
  //
  // }
  //
  //
  //
  // chart.scales.y
  //   .domain(d3.extent(allWar));
  //
  // if(chart.projection !== undefined) {
  //
  //   chart.projectionLine
  //       .attr("d",chart.lineGenerator);
  //
  //   chart.projectionCircles
  //     .attr("cy",(d) => { return chart.scales.y(d[chart.currentWARType]); });
  //
  //   chart.playerCircles
  //     .attr("cy",(d) => { return chart.scales.y(d[chart.currentWARType]); });
  //
  // }
  //
  // if(chart.compLines) {
  //   chart.compLines.forEach((line) => {
  //     line
  //       .attr("d",chart.lineGenerator);
  //   });
  //
  //   chart.textLabels.forEach((label) => {
  //       label.move({
  //         "x":chart.scales.x(+label.values.x),
  //         "y":chart.scales.y(label.values.y)
  //       });
  //   });
  //
  //   chart.compCircles.forEach((circle) => {
  //     circle
  //       .attr("cy",(d) => { return chart.scales.y(d.bWar); });
  //   });
  // }
  //
  // chart.axes.y
  //   .call(d3.axisLeft(chart.scales.y).ticks(3));

  return chart;
};

/* jshint esversion:6 */
ModelSlider.prototype.addActiveTrack = function() {
  const slider = this;

  let track = slider.layers.track
    .append("rect")
    .attr("x",slider.referencePoints.xMin)
    .attr("y",-slider.styles.trackHeight / 2)
    .attr("height",slider.styles.trackHeight)
    .attr("width",0)
    .attr("fill",slider.styles.activeTrackFill);


  return track;
}

/* jshint esversion:6 */
ModelSlider.prototype.addCircle = function() {
  const slider = this;

  let circle = slider.circleGroup
    .append("circle")
    .attr("r",slider.styles.circleRadius)
    .attr("cx",0)
    .attr("cy",0)
    .attr("fill",slider.styles.circleFill)
    .attr("stroke",slider.styles.circleStroke)
    .attr("stroke-width",slider.styles.circleStrokeWidth);

  return circle;
}

/* jshint esversion:6 */
ModelSlider.prototype.addCircleGroup = function() {
  const slider = this;

  let group = slider.layers.circle
    .append("g")
    .attr("cursor","pointer")
    .on('mouseover',slider.circleGroupMouseover())
    .on('mouseout',slider.circleGroupMouseout())
    .call(d3.drag()
      .on('start',slider.circleGroupDragStart())
      .on('drag',slider.circleGroupDrag())
      .on('end',slider.circleGroupDragEnd())
    );

  return group;
}

/* jshint esversion:6 */
ModelSlider.prototype.addGroup = function(where) {
  const slider = this;

  let group = where
    .append("g")
    .attr("transform","translate("+slider.coordinates.x+","+slider.coordinates.y+")")
    .on('mouseover',slider.groupMouseover())
    .on('mouseout',slider.groupMouseout());

  return group;
}

/* jshint esversion:6 */
ModelSlider.prototype.addHeading = function(labelText) {
  const slider = this;

  let heading;

  header = slider.group
    .append("text")
    .attr("x",slider.margins.left)
    .attr("y",-10)
    .attr("font-size","8pt")
    .attr("text-anchor","start")
    .text(labelText)

  return heading;
}

/* jshint esversion:6 */
ModelSlider.prototype.addHighlightCircle = function() {
  const slider = this;

  let circle = slider.circleGroup
    .append("circle")
    .attr("cx",0)
    .attr("cy",0)
    .attr("r",slider.styles.circleRadius)
    .attr("fill",slider.styles.highlightCircleFill)
    .attr("opacity",slider.styles.highlightCircleOpacity);

  return circle;
}

/* jshint esversion:6 */
ModelSlider.prototype.addLayers = function() {
  const slider = this;

  let layers = {};
  layers.track = slider.addSingleLayer();
  layers.activeTrack = slider.addSingleLayer();
  layers.circle = slider.addSingleLayer();
  layers.heading = slider.addSingleLayer();

  return layers;
}

/* jshint esversion:6 */
ModelSlider.prototype.addSingleLayer = function() {
  const slider = this;

  let layer = slider.group
    .append("g");

  return layer;
}

/* jshint esversion:6 */
ModelSlider.prototype.addTextGhost = function() {
  const slider = this;

  let text = slider.circleGroup
    .append("text")
    .attr("x",10)
    .attr("y",0)
    .attr("text-anchor","start")
    .attr("dominant-baseline","middle")
    .attr("font-size",slider.styles.labelFontSize)
    .attr("font-family",slider.styles.labelFontFamily)
    .attr("stroke",slider.styles.labelGhostStroke)
    .attr("stroke-width",slider.styles.labelGhostStrokeWidth)
    .attr("opacity",slider.styles.labelFontOpacity)
    .text("LABEL TEXT!");

  return text;
}

/* jshint esversion:6 */
ModelSlider.prototype.addTextLabel = function() {
  const slider = this;

  let text = slider.circleGroup
    .append("text")
    .attr("x",10)
    .attr("y",0)
    .attr("text-anchor","start")
    .attr("dominant-baseline","middle")
    .attr("font-size",slider.styles.labelFontSize)
    .attr("font-family",slider.styles.labelFontFamily)
    .attr("fill",slider.styles.labelFontFill)
    .attr("opacity",slider.styles.labelFontOpacity)
    .text("LABEL TEXT!");

  return text;
}

/* jshint esversion:6 */
ModelSlider.prototype.addTrack = function() {
  const slider = this;

  let track = slider.layers.track
    .append("rect")
    .attr("x",slider.referencePoints.xMin)
    .attr("y",-slider.styles.trackHeight / 2)
    .attr("height",slider.styles.trackHeight)
    .attr("width",slider.referencePoints.effectiveWidth)
    .attr("fill",slider.styles.trackFill);


  return track;
}

/* jshint esversion:6 */
ModelSlider.prototype.defineCallbacks = function(options) {
  const slider = this;

  callbacks = defaulter(options.callbacks,{});
  callbacks.groupMouseover = defaulter(callbacks.groupMouseover,() => {});
  callbacks.groupMouseout = defaulter(callbacks.groupMouseout,() => {});
  callbacks.circleGroupMouseover = defaulter(callbacks.circleGroupMouseover,() => {});
  callbacks.circleGroupMouseout = defaulter(callbacks.circleGroupMouseout,() => {});
  callbacks.dragStart = defaulter(callbacks.dragStart,() => {});
  callbacks.dragEnd = defaulter(callbacks.dragEnd,() => {});
  callbacks.change = defaulter(callbacks.change,() => {});

  return callbacks;

  function defaulter(setValue,defaultValue) {
    return setValue === undefined ? defaultValue : setValue;
  }
}

/* jshint esversion:6 */
ModelSlider.prototype.defineCoordinates = function(options) {
  const slider = this;

  let coordinates = defaulter(options.coordinates,{});
  coordinates.x = defaulter(coordinates.x,0);
  coordinates.y = defaulter(coordinates.y,0);

  return coordinates;

  function defaulter(setValue,defaultValue) {
    return setValue === undefined ? defaultValue : setValue;
  }
}

/* jshint esversion:6 */
ModelSlider.prototype.defineFormatter = function(options) {
  const slider = this;

  let formatter = defaulter(options.formatter,(value) => { return value.toFixed(0); });

  return formatter;

  function defaulter(setValue,defaultValue) {
    return setValue === undefined ? defaultValue : setValue;
  }
}

/* jshint esversion:6 */
ModelSlider.prototype.defineMargins = function(options) {
  const slider = this;

  let margins = defaulter(options.margins,{});
  margins.left = defaulter(margins.left,10);
  margins.right = defaulter(margins.right,10);
  margins.top = defaulter(margins.top,10);
  margins.bottom = defaulter(margins.bottom,10);

  return margins;

  function defaulter(setValue,defaultValue) {
    return setValue === undefined ? defaultValue : setValue;
  }

}

/* jshint esversion:6 */
ModelSlider.prototype.defineReferencePoints = function() {
  const slider = this;

  let referencePoints = {};
  
  referencePoints.xMin = slider.margins.left;
  referencePoints.xMax = slider.size.width - slider.margins.right;

  referencePoints.effectiveWidth = slider.size.width - slider.margins.right - slider.margins.left;

  return referencePoints;
}

/* jshint esversion:6 */
ModelSlider.prototype.defineScale = function(domain) {
  const slider = this;

  let scale = d3.scaleLinear()
    .domain(domain)
    .range([slider.referencePoints.xMin,slider.referencePoints.xMax]);

  return scale;
}

/* jshint esversion:6 */
ModelSlider.prototype.defineSize = function(options) {
  const slider = this;

  let size = defaulter(options.size,{});
  size.width = defaulter(size.width,200);
  size.height = defaulter(size.height,20);

  return size;

  function defaulter(setValue,defaultValue) {
    return setValue === undefined ? defaultValue : setValue;
  }
}

/* jshint esversion:6 */
ModelSlider.prototype.defineStyles = function(options) {
  const slider = this;

  let styles = defaulter(options.styles,{});

  styles.trackFill = defaulter(styles.trackfill,"#eee");
  styles.trackHeight = defaulter(styles.trackHeight,4);
  styles.activeTrackFill = defaulter(styles.activeTrackFill,"#ed553b");

  styles.circleRadius = defaulter(styles.circleRadius,3);
  styles.circleFill = defaulter(styles.circleFill,"white");
  styles.circleStroke = defaulter(styles.circleStroke,"#aaa");
  styles.circleStrokeWidth = defaulter(styles.circleStrokeWidth,1);

  styles.highlightCircleRadius = defaulter(styles.highlightCircleRadius,7);
  styles.highlightCircleFill = defaulter(styles.highlightCircleFill,"#ed553b");
  styles.highlightCircleOpacity = defaulter(styles.highlightCircleOpacity,0.25);

  styles.dragCircleOpacity = defaulter(styles.dragCircleOpacity,1);

  styles.labelFontSize = defaulter(styles.labelFontSize,"10pt");
  styles.labelFontFamily = defaulter(styles.labelFontFamily,"Source Sans Pro");
  styles.labelFontFill = defaulter(styles.labelFontFill,"#333");
  styles.labelFontOpacity = defaulter(styles.labelFontOpacity,1);
  styles.labelActiveFontSize = defaulter(styles.labelActiveFontSize,"12pt");
  styles.labelActiveFontFill = defaulter(styles.labelActiveFontFill,"black");
  styles.labelGhostStroke = defaulter(styles.labelGhostStroke,"white");
  styles.labelGhostStrokeWidth = defaulter(styles.labelGhostStrokeWidth,3);


  return styles;

  function defaulter(setValue,defaultValue) {
    return setValue === undefined ? defaultValue : setValue;
  }
}

/* jshint esversion:6 */
ModelSlider.prototype.circleGroupDrag = function(d,i) {
  const slider = this;

  return function() {
    let xPosition,
      xValue;

    xPosition = d3.event.x;
    xValue = slider.scale.invert(xPosition);
    xValue = xValue < slider.domain[0] ? slider.domain[0] : xValue;
    xValue = xValue > slider.domain[1] ? slider.domain[1] : xValue;

    slider.circleGroup
      .attr("transform","translate("+slider.scale(xValue)+",0)");

    slider.activeTrack
      .attr("width",slider.scale(xValue) - slider.referencePoints.xMin);

    slider.labelGhost
      .text(slider.formatter(xValue));

    slider.labelText
      .text(slider.formatter(xValue));

    slider.callbacks
      .change(xValue);

    slider.currentValue = xValue;

  }
}

/* jshint esversion:6 */
ModelSlider.prototype.circleGroupDragEnd = function() {
  const slider = this;

  return function() {
    slider.dragLock = false;
    slider.highlightCircle
      .attr("opacity",slider.styles.highlightCircleOpacity);

      slider.highlightCircle
        .transition()
        .duration(150)
        .attr("r",slider.styles.circleRadius);

      slider.labelText
        .transition()
        .duration(150)
        .attr("font-size",slider.styles.labelFontSize)
        .attr("fill",slider.styles.labelFontFill);

      slider.labelGhost
        .transition()
        .duration(150)
        .attr("font-size",slider.styles.labelFontSize);

      slider.callbacks
        .dragEnd();

  }

}

/* jshint esversion:6 */
ModelSlider.prototype.circleGroupDragStart = function() {
  const slider = this;

  return function() {
    slider.dragLock = true;
    slider.highlightCircle
      .attr("opacity",slider.styles.dragCircleOpacity);

    slider.callbacks
      .dragStart();
  }
}

/* jshint esversion:6 */
ModelSlider.prototype.circleGroupMouseout = function() {
  const slider = this;
  return function() {
    if(!slider.dragLock) {
      slider.highlightCircle
        .transition()
        .duration(150)
        .attr("r",slider.styles.circleRadius);

      slider.labelText
        .transition()
        .duration(150)
        .attr("font-size",slider.styles.labelFontSize)
        .attr("fill",slider.styles.labelFontFill);

      slider.labelGhost
        .transition()
        .duration(150)
        .attr("font-size",slider.styles.labelFontSize);

      slider.callbacks
        .circleGroupMouseout();

    }
  }
}

/* jshint esversion:6 */
ModelSlider.prototype.circleGroupMouseover = function() {
  const slider = this;
  return function() {
    if(!slider.dragLock) {
      slider.highlightCircle
        .transition()
        .duration(150)
        .attr("r",slider.styles.highlightCircleRadius);

      slider.labelText
        .transition()
        .duration(150)
        .attr("font-size",slider.styles.labelActiveFontSize)
        .attr("fill",slider.styles.labelActiveFontFill);

      slider.labelGhost
        .transition()
        .duration(150)
        .attr("font-size",slider.styles.labelActiveFontSize);

      slider.callbacks
        .circleGroupMouseover();

    }
  }
};

/* jshint esversion:6 */
ModelSlider.prototype.groupMouseout = function(d,i) {
  const slider = this;

  return function() {
    if(!slider.dragLock) {
      slider.highlightCircle
        .transition()
        .duration(150)
        .attr("r",slider.styles.circleRadius);

      slider.labelText
        .transition()
        .duration(150)
        .attr("font-size",slider.styles.labelFontSize)
        .attr("fill",slider.styles.labelFontFill);

      slider.labelGhost
        .transition()
        .duration(150)
        .attr("font-size",slider.styles.labelFontSize);

      slider.callbacks
        .groupMouseout();

    }
  };

}

/* jshint esversion:6 */
ModelSlider.prototype.groupMouseover = function(d,i) {
  const slider = this;

  return function() {

    slider.callbacks
      .groupMouseover();

  }
}

/* jshint esversion:6 */
ModelSlider.prototype.updateValue = function(newValue) {
  const slider = this;

  slider.currentValue = newValue;
  
  slider.circleGroup
    .attr("transform","translate("+slider.scale(newValue)+",0)");

  slider.activeTrack
    .attr("width",slider.scale(newValue) - slider.scale(slider.domain[0]))

  slider.labelText
    .text(slider.formatter(newValue));

  slider.labelGhost
    .text(slider.formatter(newValue));

  return slider;
}

/* jshint esversion:6 */
Modeler.prototype.addAgingCurvesButton = function() {
  const modeler = this;

  let group = modeler.layers.base
    .append("g")
    .attr("transform","translate("+(modeler.referencePoints.projectionTypeCoordinates.x + 10)+","+modeler.referencePoints.projectionTypeCoordinates.y+")");

  let rect = group
    .append("rect")
    .attr("fill","none");

  let text = group
    .append("text")
    .attr("x",0)
    .attr("y",0)
    .attr("font-size","10pt")
    .attr("font-weight","normal")
    .attr("text-anchor","start")
    .attr("dominant-baseline","middle")
    .attr("cursor","pointer")
    .text("Aging Curve")
    .on('click',() => {


      modeler.similarPlayersButton
        .select("text")
        .attr("fill","black")
        .attr("font-weight","normal");

      modeler.similarPlayersButton
        .select("rect")
        .attr("fill","none")

      rect
        .attr("fill","#ed553b");

      text
        .attr("fill","white");


      modeler.chart
        .showAgingCurveProjection();

        if(modeler.projectionParameters) {
          modeler
            .calculateContractValues();
        }
        
    })
    .on('mouseover',function() {
      modeler.tooltip
        .update("Apply a naive aging curve to the average of the player's last three years of production.")
        .show()
        .move();
    })
    .on('mousemove',function() {
      modeler.tooltip
        .move();
    })
    .on('mouseout',function() {
      modeler.tooltip
        .hide();
    });

    let textSize = text.node().getBBox();

    rect
      .attr("x",-textSize.width * 0.025)
      .attr("y",-textSize.height * (1.25/2))
      .attr("width",textSize.width * 1.05)
      .attr("height",textSize.height * 1.1)


  return group;
};

/* jshint esversion:6 */
Modeler.prototype.addBBRefWARButton = function() {
  const modeler = this;

  let group  = modeler.layers.base
    .append("g")
    .attr("transform","translate("+(modeler.referencePoints.warFormulationCoordinates.x + 5)+","+modeler.referencePoints.warFormulationCoordinates.y+")");

  let rect = group
    .append("rect");

  let text = group
    .append("text")
    .attr("x",0)
    .attr("y",0)
    .attr("text-anchor","start")
    .attr("dominant-baseline","middle")
    .attr("font-size","10pt")
    .attr("fill","white")
    .text("Baseball-Reference")
    .attr("cursor","pointer")
    .on('click',() => {
      modeler.fangraphsWARButton
        .select("text")
        .attr("fill","black")
        .attr("font-weight","normal");

      modeler.fangraphsWARButton
        .select("rect")
        .attr("fill","none");

      rect
        .attr("fill","#ed553b");

      text
        .attr("fill","white");

      modeler
        .showBBRefData();
    })
    .on('mouseover',function() {
      modeler.tooltip
        .update("Click to select <strong>Baseball-Reference.com's</strong> Wins Above Replacement metric (bWAR).")
        .show()
        .move();
    })
    .on('mousemove',function() {
      modeler.tooltip
        .move();
    })
    .on('mouseout',function() {
      modeler.tooltip
        .hide();
    });

  let textSize = text.node().getBBox();

  rect
    .attr("x",-textSize.width * 0.025)
    .attr("y",-textSize.height * (1.25/2))
    .attr("width",textSize.width * 1.05)
    .attr("height",textSize.height * 1.1)
    .attr("fill","#ed553b");



  return group;
};

/* jshint esversion:6 */
Modeler.prototype.addChart = function(options) {
  const modeler = this;
  let chart;

  chart = new LineChart({
    "where":modeler.layers.chart,
    "size":modeler.referencePoints.chartSize,
    "margins":modeler.referencePoints.chartMargins,
    "origin":modeler.referencePoints.chartOrigin,
  });

  return chart;
};

/* jshint esversion:6 */
Modeler.prototype.addContractValueHeading = function() {
  const modeler = this;

  let text = modeler.rightPane
    .append("text")
    .attr("font-size","10pt")
    .attr("text-anchor","middle")
    .attr("dominant-baseline","alphabetic")
    .attr("x",modeler.referencePoints.contractValueHeadingCoordinates.x)
    .attr("y",modeler.referencePoints.contractValueHeadingCoordinates.y)
    .text("Projected Production");

  return text;
};

/* jshint esversion:6 */
Modeler.prototype.addContractValueLabel = function() {
  const modeler = this;

  text = modeler.rightPane
    .append("text")
    .attr("text-anchor","middle")
    .attr("dominant-baseline","middle")
    .attr("font-weight","bold")
    .attr("font-size","18pt")
    .attr("x",modeler.referencePoints.contractValueCoordinates.x)
    .attr("y",modeler.referencePoints.contractValueCoordinates.y)
    .text("$150M");

  return text;
};

/* jshint esversion:6 */
Modeler.prototype.addContractYearsSlider = function() {
  const modeler = this;
  let slider;
  let maxYears = 40 - modeler.player.stats.stats["2018"].age;

  slider = new ModelSlider({
    "where":modeler.rightPane,
    "coordinates":modeler.referencePoints.rightPaneContractLengthSliderCoordinates,
    "formatter":(x) => { return x.toFixed(0) + " years" },
    "domain":[1,maxYears],
    "styles":{
      "labelFontFill":"black",
      "labelFontSize":"12pt",
      "labelActiveFontSize":"14pt"
    },
    "size":{
      "width":300,
    },
    "labelText":"Contract Length:",
    "callbacks":{
      "change":(newValue) => {
        modeler.projectionParameters.contractLength = newValue.toFixed(0);
        modeler.calculateContractValues();

        modeler.winChart
          .updateYears(modeler.projectionParameters.contractLength);
        modeler.salaryChart
          .updateYears(modeler.projectionParameters.contractLength);

      }
    }
  });


  return slider;
};

/* jshint esversion:6 */
Modeler.prototype.addEditMarketValueButton = function() {
  const modeler = this;


  let group  = modeler.rightPane
    .append("g")
    .attr("transform","translate("+(modeler.referencePoints.winValueButtonCoordinates.x)+","+modeler.referencePoints.editSalaryButtonCoordinates.y+")");

  let rect = group
    .append("rect");

  let text = group
    .append("text")
    .attr("text-anchor","start")
    .attr("dominant-baseline","normal")
    .attr("font-size","10pt")
    .attr("cursor","pointer")
    .attr("fill","black")
    .attr("x",0)
    .attr("y",3)
    .text("Edit Value of Wins")
    .on('click',modeler.toggleEditView());


  return group;
};

/* jshint esversion:6 */
Modeler.prototype.addEditSalaryButton = function() {
  const modeler = this;

  let group  = modeler.rightPane
    .append("g")
    .attr("transform","translate("+(modeler.referencePoints.editSalaryButtonCoordinates.x)+","+modeler.referencePoints.editSalaryButtonCoordinates.y+")")

  let rect = group
    .append("rect");

  let text = group
    .append("text")
    .attr("text-anchor","start")
    .attr("font-weight","normal")
    .attr("font-size","10pt")
    .attr("cursor","pointer")
    .attr("fill","white")
    .attr("x",0)
    .attr("y",3)
    .text("Edit Salary")
    .on('click',modeler.toggleEditView());

  // let textSize = text.node().getBBox();
  //
  // rect
  //   .attr("x",-textSize.width * 0.025)
  //   .attr("y",-textSize.height * (1.25/2))
  //   .attr("width",textSize.width * 1.05)
  //   .attr("height",textSize.height * 1.1)
  //   .attr("fill","#ed553b");


  return group;
};

/* jshint esversion:6 */
Modeler.prototype.addFangraphsWARButton = function() {
  const modeler = this;

  let group = modeler.layers.base
    .append("g")
    .attr("transform","translate("+250+","+modeler.referencePoints.warFormulationCoordinates.y+")");

  let rect = group
    .append("rect")
    .attr("fill","none");

  let text = group
    .append("text")
    .attr("x",0)
    .attr("y",0)
    .attr("text-anchor","start")
    .attr("dominant-baseline","middle")
    .attr("font-size","10pt")
    .attr("font-weight","normal")
    .attr("cursor","pointer")
    .text("Fangraphs")
    .on('click',() => {
      modeler.BBRefWARButton
        .select("text")
        .attr("fill","black")
        .attr("font-weight","normal");

      modeler.BBRefWARButton
        .select("rect")
        .attr("fill","none")

      modeler.fangraphsWARButton
        .attr("font-weight","bold");

      rect
        .attr("fill","#ed553b");

      text
        .attr("fill","white");


      modeler
        .showFangraphsData();

    })
    .on('mouseover',function() {
      modeler.tooltip
        .update("Click to select <strong>Fangraph's</strong> Wins Above Replacement metric (fWAR).")
        .show()
        .move();
    })
    .on('mousemove',function() {
      modeler.tooltip
        .move();
    })
    .on('mouseout',function() {
      modeler.tooltip
        .hide();
    });

  let textSize = text.node().getBBox();

  rect
    .attr("x",-textSize.width * 0.025)
    .attr("y",-textSize.height * (1.25/2))
    .attr("width",textSize.width * 1.05)
    .attr("height",textSize.height * 1.1);


  return group;
};

/* jshint esversion:6 */
Modeler.prototype.addLayers = function() {
  const modeler = this;
  let layers = {};

  layers.base = modeler.addSingleLayer();
  layers.contract = modeler.addSingleLayer();
  layers.button = modeler.addSingleLayer();
  layers.rightPane = modeler.addSingleLayer();
  layers.chart = modeler.addSingleLayer();
  layers.pane = modeler.addSingleLayer();

  layers.chart
    .attr("transform","translate("+modeler.referencePoints.chartOrigin.x+","+modeler.referencePoints.chartOrigin.y+")");

  return layers;
};

/* jshint esversion:6 */
Modeler.prototype.addModelerKey = function() {
  const modeler = this;
  
  let key = new ModelerKey({
    "where":modeler.layers.base,
  });
  return key;
};

/* jshint esversion:6 */
Modeler.prototype.addModelerPane = function() {
  const modeler = this;

  let pane = new ModelerPane({
    "where":modeler.layers.pane,
    "parent":modeler
  });

  return pane;
};

/* jshint esversion:6 */
Modeler.prototype.addPaneContractDetails = function() {
  const modeler = this;

  let text = modeler.rightPane
    .append("text")
    .attr("x",modeler.referencePoints.contractDetailsHeadingCoordinates.x)
    .attr("y",modeler.referencePoints.contractDetailsHeadingCoordinates.y)
    .attr("text-anchor","middle")
    .attr("dominant-baseline","middle")
    .attr("font-weight","bold")
    .attr("font-size","14pt")
    .text("Contract Details");


  return text;
};

/* jshint esversion:6 */
Modeler.prototype.addPaneHint = function() {
  const modeler = this;

  let object = modeler.layers.base
    .append("foreignObject")
    .attr("x",modeler.referencePoints.rightPaneCoordinates.x)
    .attr("y",modeler.referencePoints.rightPaneCoordinates.y)
    .attr("width",modeler.referencePoints.rightPaneSize.width)
    .attr("height",modeler.referencePoints.rightPaneSize.height)
    .attr("cursor","pointer");

  let body = object
    .append("xhtml:body")
    .style("height","100%")
    .style("width","100%")
    .style("margin",0)
    .style("background-color","#eee");

  let tableDisplay = body
    .append("div")
    .style("display","table")
    .style("height","100%")
    .style("width","100%");

  let tableCenter = tableDisplay
    .append("div")
    .style("display","table-cell")
    .style("height","100%")
    .style("vertical-align","middle")
    .style("padding-left","1em")
    .style("padding-right","1em");

  let emptyDiv = tableCenter
    .append("div")
    .style("border","5px dashed #ed553b")
    .style("padding","0.25em");

  let display = emptyDiv
    .append("div")
    .style("color","#20639B")
    .html("<div style='font-size:2em; font-weight:bold'>Contract Simulator</div><div><strong>Click here</strong> to evaluate potential contracts for <span class='playerName'></span>.</div>");



  object
    .on('mouseover',() => {
      body
        .transition()
        .duration(125)
        .style("background-color","#20639B");

      display
        .transition()
        .duration(125)
        .style("color","#eee");

      emptyDiv
        .transition()
        .duration(125)
        .style("border","5px dashed #eee");

    })
    .on('mouseout',() => {
      body
        .transition()
        .duration(175)
        .style("background-color","#eee");

      display
        .transition()
        .duration(75)
        .style("color","#20639B");

      emptyDiv
        .transition()
        .duration(75)
        .style("border","5px dashed #ed553b");


    })
    .on('click',() => {
      modeler.pane
        .transitionIn();
    });

  return object;
};

/* jshint esversion:6 */
Modeler.prototype.addProjectedSurplusHeading = function() {
  const modeler = this;

  let text = modeler.rightPane
    .append("text")
    .attr("x",modeler.referencePoints.projectedSurplusHeadingCoordinates.x)
    .attr("y",modeler.referencePoints.projectedSurplusHeadingCoordinates.y)
    .attr("text-anchor","middle")
    .attr("dominant-baseline","alphabetic")
    .attr("font-size","10pt")
    .text("Projected Surplus");

  return text;
};

/* jshint esversion:6 */
Modeler.prototype.addProjectedSurplusValue = function() {
  const modeler = this;

  let text = modeler.rightPane
    .append("text")
    .attr("font-weight","bold")
    .attr("font-size","18pt")
    .attr("text-anchor","middle")
    .attr("dominant-baseline","middle")
    .attr("x",modeler.referencePoints.projectedSurplusValueCoordinates.x)
    .attr("y",modeler.referencePoints.projectedSurplusValueCoordinates.y)
    .text("");

  return text;
};

/* jshint esversion:6 */
Modeler.prototype.addProjectionType = function() {
  const modeler = this;

  let text = modeler.layers.base
    .append("text")
    .attr("x",modeler.referencePoints.projectionTypeCoordinates.x)
    .attr("y",modeler.referencePoints.projectionTypeCoordinates.y)
    .attr("text-anchor","end")
    .attr("dominant-baseline","middle")
    .attr("font-size","10pt")
    .attr("font-weight","normal")
    .text("Projection Basis")
    .on('mouseover',function() {
      modeler.tooltip
        .update("Select a method for projected future player performance.")
        .show()
        .move();
    })
    .on('mousemove',function() {
      modeler.tooltip
        .move();
    })
    .on('mouseout',function() {
      modeler.tooltip
        .hide();
    });


  return text;
};

/* jshint esversion:6 */
Modeler.prototype.addRightPane = function() {
  const modeler = this;

  let pane = modeler.layers.rightPane
    .append("g")
    .attr("display","none");

  pane
    .append("rect")
    .attr("x",modeler.referencePoints.rightPaneCoordinates.x)
    .attr("y",modeler.referencePoints.rightPaneCoordinates.y)
    .attr("width",modeler.referencePoints.rightPaneSize.width)
    .attr("height",modeler.referencePoints.rightPaneSize.height)
    .attr("fill","white");

  return pane;
};

/* jshint esversion:6 */
Modeler.prototype.addSalaryChart = function() {
  const modeler = this;

  let chart = new WinChart({
    "where":modeler.salaryChartGroup,
    "domain":[2,40],
    "data":modeler.projectionParameters.salary,
    "callbacks":{
      "groupMouseover":(d,i) => { console.log(d); console.log("GROUP MOUSEOVER"); }
    }
  }).addAAVSlider();

  chart.changeCallback = function() {
    modeler.projectionParameters.aav = chart.aavSlider.currentValue;
    modeler.projectionParameters.salary = chart.data;
    modeler
      .calculateContractValues();
  };


  return chart;
};

/* jshint esversion:6 */
Modeler.prototype.addSalaryChartGroup = function() {
  const modeler = this;

  let group = modeler.layers.rightPane
    .append("g")
    .attr("transform","translate(545,225)");

  return group;
};

/* jshint esversion:6 */
Modeler.prototype.addSimilarPlayersButton = function() {
  const modeler = this;

  let group = modeler.layers.base
    .append("g")
    .attr("transform","translate("+250+","+modeler.referencePoints.projectionTypeCoordinates.y+")");

  let rect = group
    .append("rect")
    .attr("fill","none");

  let text = group
    .append("text")
    .attr("x",0)
    .attr("y",0)
    .attr("text-anchor","start")
    .attr("dominant-baseline","middle")
    .attr("font-size","10pt")
    .attr("fill","white")
    .text("Similar Players")
    .attr("cursor","pointer")
    .on('click',() => {

      modeler.agingCurvesButton
        .select("text")
        .attr("fill","black")
        .attr("font-weight","normal");

      modeler.agingCurvesButton
        .select("rect")
        .attr("fill","none")

      rect
        .attr("fill","#ed553b");

      text
        .attr("fill","white");

      modeler.chart
        .showAgingSimilarPlayersProjection();

        if(modeler.projectionParameters) {
          modeler
            .calculateContractValues();
        }


    })
    .on('mouseover',function() {
      modeler.tooltip
        .update("Average out the career performance of Baseball-Reference.com's <strong>10 most similar players</strong>.")
        .show()
        .move();
    })
    .on('mousemove',function() {
      modeler.tooltip
        .move();
    })
    .on('mouseout',function() {
      modeler.tooltip
        .hide();
    });

    let textSize = text.node().getBBox();

    rect
      .attr("x",-textSize.width * 0.025)
      .attr("y",-textSize.height * (1.25/2))
      .attr("width",textSize.width * 1.05)
      .attr("height",textSize.height * 1.1)
      .attr("fill","#ed553b");


  return group;
};

/* jshint esversion:6 */
Modeler.prototype.addSingleLayer = function() {
  const modeler = this;
  let layer;
  layer = modeler.svg
    .append("g");
  return layer;
};

/* jshint esversion:6 */
Modeler.prototype.addSubtitle = function() {
  const modeler = this;

  let text = modeler.layers.base
    .append("text")
    .attr("x",modeler.referencePoints.subTitleCoordinates.x)
    .attr("y",modeler.referencePoints.subTitleCoordinates.y)
    .attr("text-anchor","middle")
    .attr("dominant-baseline","middle")
    .attr("font-size","12pt")
    .text("Career and Projected Wins Above Replacement");

  return text;
};

/* jshint esversion:6 */
Modeler.prototype.addSvg = function(where) {
  const modeler = this;
  let svg;

  svg = d3.select(where)
    .append("svg")
    .attr("width",modeler.size.width)
    .attr("height",modeler.size.height);

  return svg;
};

/* jshint esversion:6 */
Modeler.prototype.addTitle = function() {
  const modeler = this;

  text = modeler.layers.base
    .append("text")
    .attr("x",modeler.referencePoints.nameCoordinates.x)
    .attr("y",modeler.referencePoints.nameCoordinates.y)
    .attr("font-size","24pt")
    .attr("font-weight","bold")
    .attr("text-anchor","middle")
    .attr("dominant-baseline","middle")
    .text("");

  return text;
};

/* jshint esversion:6 */
Modeler.prototype.addWARFormulation = function() {
  const modeler = this;

  text = modeler.layers.base
    .append("text")
    .attr("x",modeler.referencePoints.warFormulationCoordinates.x)
    .attr("y",modeler.referencePoints.warFormulationCoordinates.y)
    .attr("text-anchor","end")
    .attr("dominant-baseline","middle")
    .attr("font-size","10pt")
    .text("WAR Formulation: ")
    .attr("cursor","pointer")
    .on('mouseover',function() {
      modeler.tooltip
        .update("Select the basis for measuring player production.")
        .show()
        .move();
    })
    .on('mousemove',function() {
      modeler.tooltip
        .move();
    })
    .on('mouseout',function() {
      modeler.tooltip
        .hide();
    });

  return text;
};

/* jshint esversion:6 */
Modeler.prototype.addWinChart = function() {
  const modeler = this;

  let chart = new WinChart({
    "where":modeler.winChartGroup,
    "domain":[2,40],
    "data":modeler.projectionParameters.winValue
  });

  chart.changeCallback = function() {

    modeler.projectionParameters.winValue = chart.data;
    modeler
      .calculateContractValues();

  }


  return chart;
}

/* jshint esversion:6 */
Modeler.prototype.addWinChartGroup = function() {
  const modeler = this;

  let group = modeler.layers.rightPane
    .append("g")
    .attr("transform","translate(545,225)")
    .attr("display","none");

  return group;
};

/* jshint esversion:6 */
Modeler.prototype.addWinValueSliders = function (yearsToProject) {
  const modeler = this;

  let sliders = [];

  d3.range(0,16).forEach((year,index) => {
    let slider;

    if(index <= 8) {
      slider = new Slider({
        "where":modeler.rightPane,
        "size":{"height":25,"width":150},
        "margins":{"top":5,"bottom":5},
        "coordinates":{"x":505,"y":200 + index * 25},
        "label":2019 + index,
        "domain":[8,25],
        "significantDigits":2,
        "defaultValue":8,
        "leftLabel":true
        // "defaultValue":+modeler.projectionParameters.winValue[index].toFixed(2)
      }).setDragCallback((newValue) => {
        modeler.calculateContractValues();
      });

      sliders.push(slider);
    } else {
      slider = new Slider({
        "where":modeler.rightPane,
        "size":{"height":25,"width":150},
        "margins":{"top":5,"bottom":5},
        "coordinates":{"x":665,"y":200 + (index - 9) * 25},
        "label":2019 + index,
        "domain":[8,25],
        "significantDigits":2,
        "defaultValue":8,
        "leftLabel":true
        // "defaultValue":+modeler.projectionParameters.winValue[index].toFixed(2)
      }).setDragCallback((newValue) => {
        modeler.calculateContractValues();
      });

      sliders.push(slider);
    }
  });

  return sliders;
};

/* jshint esversion:6 */
Modeler.prototype.defaulter = function(value,defaultValue) {
  return value !== undefined ? value : defaultValue;
};

/* jshint esversion:6 */
Modeler.prototype.defineChartMargins = function(preset) {
  const modeler = this;
  let margins;
  margins = modeler.defaulter(preset,{});
  margins.left = modeler.defaulter(margins.left,75);
  margins.right = modeler.defaulter(margins.right,10);
  margins.top = modeler.defaulter(margins.top,50);
  margins.bottom = modeler.defaulter(margins.bottom,50);
  return margins;
};

/* jshint esversion:6 */
Modeler.prototype.defineReferencePoints = function() {
  const modeler = this;

  let referencePoints = {};
  referencePoints.leftPaneSize = {
    "width":467,
    "height":500
  };

  referencePoints.nameCoordinates = {
    "x":235,
    "y":31.25
  };

  referencePoints.subTitleCoordinates = {
      "x":235,
      "y":62.5
  };

  referencePoints.warFormulationCoordinates = {
    "x":100,
    "y":93.75
  };

  referencePoints.projectionTypeCoordinates = {
    "x":100,
    "y":114.58
  };

  referencePoints.chartOrigin = {
    "x":0,
    "y":135.42
  };

  referencePoints.chartSize = {
    "width":433.33,
    "height":260.42
  };

  referencePoints.chartMarginLeft = 66.67;
  referencePoints.chartMarginBottom = 52.08;

  referencePoints.chartMargins = {
    "left":66.67,
    "right":0,
    "top":0,
    "bottom":52.08
  };

  referencePoints.chartEffectiveMidX = 266.68;
  referencePoints.chartEffectiveMidY = 239.59;

  referencePoints.chartXAxisLabelCoordinates = {
    "x":referencePoints.chartEffectiveMidX,
    "y":369.8
  };

  referencePoints.chartYAxisLabelCoordinates = {
    "x":50,
    "y":referencePoints.chartEffectiveMidY
  };




  referencePoints.chartEffectiveSize = {
    "width":366.67,
    "height":208.34
  };

  referencePoints.chartXAxisMin = referencePoints.chartOrigin.x + referencePoints.chartMarginLeft;
  referencePoints.chartYAxisMin = referencePoints.chartOrigin.y + referencePoints.chartEffectiveSize.height;

  referencePoints.chartXAxisMax = referencePoints.chartXAxisMin + referencePoints.chartEffectiveSize.width;
  referencePoints.chartYAxisMax = referencePoints.chartYAxisMin - referencePoints.chartEffectiveSize.height;

  referencePoints.chartMinCoordinates = {
    "x":referencePoints.chartXAxisMin,
    "y":referencePoints.chartYAxisMin
  };

  referencePoints.legendCoordinates = {
    "x":16.67,
    "y":416.67
  };

  referencePoints.legendSize = {
    "width":433.33,
    "height":52.09
  };

  referencePoints.rightPaneSize = {
    "width":250,
    "height":500
  };

  referencePoints.rightPaneCoordinates = {
    "x":550,
    "y":0
  };

  referencePoints.overlayPlaneSize = {
    "width":716.67,
    "height":500
  };

  referencePoints.overlayPlaneOffscreen = {
    "x":800,
    "y":0
  };

  referencePoints.overlayPlaneOnscreen = {
    "x":83.33,
    "y":0
  };

  referencePoints.overlayTitleCoordinates = {
    "x":14.92,
    "y":41.67
  };

  referencePoints.overlayContractCoordinates = {
    "x":14.92,
    "y":104.17
  };

  referencePoints.overlayContractDescriptionCoordinates = {
    "x":14.92,
    "y":125
  };

  referencePoints.overlayContractSliderCoordinates =  {
    "x":14.92,
    "y":177.083
  };

  referencePoints.overlaySalaryCoordinates = {
    "x":253.94,
    "y":104.17
  };

  referencePoints.overlaySalaryDescriptionCoordinates = {
    "x":253.94,
    "y":125
  };

  referencePoints.overlaySalarySliderCoordinates =  {
    "x":253.94,
    "y":177.083
  };

  referencePoints.overlayWinValueCoordinates = {
    "x":492.94,
    "y":104.17
  };

  referencePoints.overlayWinValueDescriptionCoordinates = {
    "x":492.94,
    "y":125
  };

  referencePoints.overlayWinValueTableCoordinates = {
    "x":492.94,
    "y":177.083
  };

  referencePoints.saveButtonCoordinates = {
    "x":492.94,
    "y":437.5
  };

  referencePoints.saveButtonSize = {
    "width":209.13,
    "height":41.667
  };

  referencePoints.contractDetailsHeadingCoordinates = {
    "x":625,
    "y":41.68
  };

  referencePoints.projectedSurplusHeadingCoordinates = {
    "x":566.67,
    "y":72.92
  };

  referencePoints.projectedSurplusValueCoordinates = {
    "x":566.67,
    "y":93.75
  };

  referencePoints.contractValueHeadingCoordinates = {
    "x":700,
    "y":72.92
  };

  referencePoints.contractValueCoordinates = {
    "x":700,
    "y":93.75
  };

  referencePoints.editSalaryButtonCoordinates = {
    "x":566.67,
    "y":175
  };

  referencePoints.winValueButtonCoordinates = {
    "x":675,
    "y":197.92
  };

  referencePoints.contractTableCoordinates = {
    "x":483.333,
    "y":197.92
  };

  referencePoints.contractTableSize = {
    "width":300,
    "height":260.41
  };

  referencePoints.rightPaneContractLengthSliderCoordinates = {
    "x":483.33,
    "y":135
  };

  referencePoints.aavSliderCoordinates = {
    "x":483.33,
    "y":150
  };


  referencePoints.overlayColumnWidth = 209.13;
  referencePoints.overlayDescriptionHeight = 41.667;
  referencePoints.overlaySliderHeight = 41.667;
  referencePoints.overlayColumnTableHeight = 218.75;

  return referencePoints;
};

/* jshint esversion:6 */
Modeler.prototype.defineSize = function(preset) {
  const modeler = this;
  let size;
  size = modeler.defaulter(preset,{});
  size.width = modeler.defaulter(size.width,800);
  size.height = modeler.defaulter(size.height,500);
  return size;
};

/* jshint esversion:6 */
Modeler.prototype.addCompData = function(data) {
  const modeler = this;

  modeler.chart
    .addCompData(data);

  return modeler;
};

/* jshint esversion:6 */
Modeler.prototype.addPlayerData = function(data,name) {
  const modeler = this;


  let bWarArray = [];
  Object.keys(data.stats).forEach((year) => {
    bWarArray.push({
      "age":data.stats[year].age,
      "bWar":data.stats[year].bWar,
      "fWar":data.stats[year].fWar
    })
  });

  modeler.chart
    .addPlayerData(bWarArray,name);

  modeler.title
    .text(name);

  modeler.key
    .playerName(name);

  d3.selectAll(".playerName")
    .html(name);

  return modeler;
};

/* jshint esversion:6 */
Modeler.prototype.addProjection = function(projection) {
  const modeler = this;

  modeler.projection = projection;

  modeler.chart
    .addProjection(projection);

  return modeler;
};

/* jshint esversion:6 */
Modeler.prototype.calculateContractValues = function() {
  const modeler = this;

  let chartData = [];
  let projectionBasis;
  let contractMarketValue = 0;
  let contractCost = modeler.projectionParameters.aav * modeler.projectionParameters.contractLength;
  let contractSurplus;
  let winKey;

  if(modeler.chart.currentWARType == "bWar") {
    winKey = "bWar";
    if(modeler.chart.currentView == "agingCurve") {
      projectionBasis = JSON.parse(JSON.stringify(modeler.chart.projection.bWarAgingCurveProjection));
    } else {
      projectionBasis = JSON.parse(JSON.stringify(modeler.chart.projection.bWarSimilarPlayersMean));
    }
  } else {
    winKey = "fWar";
    if(modeler.chart.currentView == "agingCurve") {
      projectionBasis = JSON.parse(JSON.stringify(modeler.chart.projection.fWarAgingCurveProjection));
    } else {
      projectionBasis = JSON.parse(JSON.stringify(modeler.chart.projection.fWarSimilarPlayersMean));
    }
  }

  projectionBasis.shift();

  d3.range(0,modeler.projectionParameters.contractLength).forEach((year) => {
    if(projectionBasis.hasOwnProperty(year)) {
      chartData.push({
        "age":projectionBasis[year].age,
        "bWar":modeler.projectionParameters.salary[year] / modeler.projectionParameters.winValue[year],
        "fWar":modeler.projectionParameters.salary[year] / modeler.projectionParameters.winValue[year],
        "salary":modeler.projectionParameters.salary[year],
        "winValue":modeler.projectionParameters.winValue[year],
      });
      contractMarketValue += projectionBasis[year][modeler.chart.currentWARType] * modeler.projectionParameters.winValue[year];
    }
  });

  modeler.chart.contractLine
    .datum(chartData)
    .attr("d",modeler.chart.lineGenerator);

  let circles = modeler.chart.layers.contract
    .selectAll("circle")
    .data(chartData);

  circles
    .attr("cx",(d) => { return modeler.chart.scales.x(d.age); })
    .attr("cy",(d) => { return modeler.chart.scales.y(d[modeler.chart.currentWARType]); });


  circles
    .enter()
    .append("circle")
    .attr("cx",(d) => { return modeler.chart.scales.x(d.age); })
    .attr("cy",(d) => { return modeler.chart.scales.y(d[modeler.chart.currentWARType]); })
    .attr("r",3)
    .attr("fill","white")
    .attr("stroke","#ed553b")
    .attr("stroke-width",1)
    .attr("cursor","pointer")
    .on('mouseover',function(d,i)  {
      let element = d3.select(this);

      element
        .attr("fill","#ed553b");


      let projectedWins = modeler.chart.projectionLine.data()[0].filter((a) => { return a.age === d.age; })[0];
      let yearValue = (projectedWins[modeler.chart.currentWARType] * d.winValue).toFixed(2);
      let surplus = (yearValue - d.salary).toFixed(2);
      let surplusColor = surplus >= 0 ? "green" : "red";


      let table = "<table>";
      table += "<tr><td style='text-align:right'>Age:</td><td style='text-align:center'>" + d.age +"</td>";
      table += "<tr><td style='text-align:right'>Projected WAR:</td><td style='text-align:center'>" + projectedWins[modeler.chart.currentWARType].toFixed(2) + "</td></tr>";
      table += "<tr><td style='text-align:right'>Cost / WAR</td><td style='text-align:center'>$" + d.winValue.toFixed(2) + "mm</td></tr>";
      table += "<tr><td style='text-align:right'>Projected Value</td><td style='text-align:center'>$" + yearValue + "mm</td></tr>";
      table += "<tr><td style='text-align:right;border-bottom:1px solid black'>Proposed Salary</td><td style='text-align:center; border-bottom:1px solid black'>$"+d.salary.toFixed(2)+"mm</td></tr>";
      table += "<tr style='font-weight:bold; color:"+surplusColor+"'><td style='text-align:right'>Year Surplus:</td><td style='text-align:center'>$"+ surplus +"mm</td></tr>";
      table += "</table>";

      modeler.tooltip
        .update(table)
        .show()
        .move();
    })
    .on('mouseout',function(d,i) {
      let element = d3.select(this);
      element
        .attr("fill","white");

      modeler.tooltip
        .hide();
    })
    .on('mousemove',() => {
      modeler.tooltip
        .move();
    });

  circles
    .exit()
    .remove();


  contractSurplus = contractMarketValue - contractCost;

  let surplusColor = contractSurplus > 0 ? "green" : "red";

  modeler.projectedSurplusValue
    .text("$" + contractSurplus.toFixed(2) + "MM")
    .attr("fill",surplusColor);

  modeler.contractValueLabel
    .text("$" + contractMarketValue.toFixed(2) + "MM");


  modeler.chart.contractText
    .show()
    .move({
      "x":modeler.chart.scales.x(chartData[chartData.length-1].age)  + 5,
      "y":modeler.chart.scales.y(chartData[chartData.length-1][winKey])
    })


  return this;
};

/* jshint esversion:6 */
Modeler.prototype.dataFromPane = function(data) {
  const modeler = this;

  modeler.chart.projectionLine
    .attr("display","block");

  modeler.rightPane
    .attr("display","block");

  modeler.projectionParameters = data;

  modeler.contractYearsSlider.updateValue(modeler.projectionParameters.contractLength);

  modeler.calculateContractValues();

  modeler.salaryChart = modeler.addSalaryChart()
    .updateYears(modeler.projectionParameters.contractLength);

  modeler.winChart = modeler.addWinChart()
    .updateYears(modeler.projectionParameters.contractLength);

  let salarySize = modeler.salaryButton
    .select("text")
    .node()
    .getBBox();

  modeler.salaryButton
    .select("rect")
    .attr("width",salarySize.width * 1.25)
    .attr("height",salarySize.height * 1.1)
    .attr("x",-5)
    .attr("y",-10)
    .attr("fill","#ed553b");

  let winButtonSize = modeler.winValueButton
    .select("text")
    .node()
    .getBBox();

  modeler.winValueButton
    .select("rect")
    .attr("width",winButtonSize.width * 1.1)
    .attr("height",winButtonSize.height * 1.1)
    .attr("x",-5)
    .attr("y",-10)
    .attr("fill","white");

  return modeler;
};

/* jshint esversion:6 */
Modeler.prototype.registerTooltip = function(tooltip) {
  const modeler = this;

  modeler.tooltip = tooltip;
  modeler.chart.tooltip = tooltip;
  modeler.pane
    .registerTooltip(tooltip);

  return modeler;
};

/* jshint esversion:6 */
Modeler.prototype.showBBRefData = function() {
  const modeler = this;

  modeler.chart
    .showBBRefData();

  if(modeler.projectionParameters) {
    modeler
      .calculateContractValues();
  }

  return modeler;
}

/* jshint esversion:6 */
Modeler.prototype.showFangraphsData = function() {
  const modeler = this;

  modeler.chart
    .showFangraphsData();

  if(modeler.projectionParameters) {
    modeler
      .calculateContractValues();
  }


  return modeler;
}

/* jshint esversion:6 */
Modeler.prototype.toggleEditView = function() {
  const modeler = this;

  return function() {

    if(modeler.currentEditView === "salary") {
      modeler.salaryChartGroup.attr("display","none");
      modeler.winChartGroup.attr("display","block");
      modeler.currentEditView = "winValue";

      modeler.salaryButton
        .select("rect")
        .attr("fill","none");

      modeler.salaryButton
        .select("text")
        .attr("fill","black");

      modeler.winValueButton
        .select("text")
        .attr("fill","white");

      modeler.winValueButton
        .select("rect")
        .attr("fill","#ed553b");


    } else {
      modeler.salaryChartGroup.attr("display","block");
      modeler.winChartGroup.attr("display","none");
      modeler.currentEditView = "salary";

      modeler.salaryButton
        .select("rect")
        .attr("fill","#ed553b");

      modeler.salaryButton
        .select("text")
        .attr("fill","white");

      modeler.winValueButton
        .select("text")
        .attr("fill","black");

      modeler.winValueButton
        .select("rect")
        .attr("fill","none");

    }
  }

}

/* jshint esversion:6 */
ModelerKey.prototype.addContractValue = function() {
  const key = this;
  let toReturn = {};

  toReturn.group = key.group
    .append("g");

  toReturn.line = toReturn.group
    .append("line")
    .attr("x1",-7.5)
    .attr("x2",7.5)
    .attr("y1",0)
    .attr("y2",0)
    .attr("stroke",key.styles.contractValueStroke)
    .attr("stroke-width",5);

  toReturn.playerNameLabel = new TextLabel({
    "where":toReturn.group,
    "textAnchor":"start",
    "foregroundColor":key.styles.textColor,
    "fontFamily":key.styles.fontFamily,
    "fontWeight":key.styles.fontWeight,
    "fontSize":key.styles.fontSize,
    "text":"Contract Fair"
  }).show()
  .move({
    "x":10,
    "y":-6
  });

  toReturn.warLabel = new TextLabel({
    "where":toReturn.group,
    "textAnchor":"start",
    "foregroundColor":key.styles.textColor,
    "fontFamily":key.styles.fontFamily,
    "fontWeight":key.styles.fontWeight,
    "fontSize":key.styles.fontSize,
    "text":"Market Value"
  }).show()
  .move({
    "x":10,
    "y":6
  });


  return toReturn;
};

/* jshint esversion:6 */
ModelerKey.prototype.addErrorRange = function() {
  const key = this;
  let toReturn = {};

  toReturn.group = key.group
    .append("g");

  toReturn.rect = toReturn.group
    .append("rect")
    .attr("x",-5)
    .attr("y",-5)
    .attr("width",10)
    .attr("height",10)
    .attr("stroke","none")
    .attr("fill",key.styles.errorRangeFill);

  toReturn.errorRange = new TextLabel({
    "where":toReturn.group,
    "textAnchor":"start",
    "foregroundColor":key.styles.textColor,
    "fontFamily":key.styles.fontFamily,
    "fontWeight":key.styles.fontWeight,
    "fontSize":key.styles.fontSize,
    "text":"Similar Players"
  }).show()
  .move({
    "x":10,
    "y":-7
  });

  toReturn.warLabel = new TextLabel({
    "where":toReturn.group,
    "textAnchor":"start",
    "foregroundColor":key.styles.textColor,
    "fontFamily":key.styles.fontFamily,
    "fontWeight":key.styles.fontWeight,
    "fontSize":key.styles.fontSize,
    "text":"Career WAR Range"
  }).show()
  .move({
    "x":10,
    "y":7
  });


  return toReturn;
};

/* jshint esversion:6 */
ModelerKey.prototype.addGroup = function(where) {
  const key = this;
  let group;

  group = where
    .append("g")
    .attr("transform","translate("+key.position.x+","+key.position.y+")");

  return group;
};

/* jshint esversion:6 */
ModelerKey.prototype.addPlayerHistory = function() {
  const key = this;
  let toReturn = {};

  toReturn.group = key.group
    .append("g");

  toReturn.line = toReturn.group
    .append("line")
    .attr("x1",-7.5)
    .attr("x2",7.5)
    .attr("y1",0)
    .attr("y2",0)
    .attr("stroke",key.styles.playerHistoryStroke)
    .attr("stroke-width",key.styles.lineStrokeWidth);

  toReturn.playerNameLabel = new TextLabel({
    "where":toReturn.group,
    "textAnchor":"start",
    "foregroundColor":key.styles.textColor,
    "fontFamily":key.styles.fontFamily,
    "fontWeight":key.styles.fontWeight,
    "fontSize":key.styles.fontSize,
    "text":""
  }).show()
  .move({
    "x":10,
    "y":-7
  });


  toReturn.warLabel = new TextLabel({
    "where":toReturn.group,
    "textAnchor":"start",
    "foregroundColor":key.styles.textColor,
    "fontFamily":key.styles.fontFamily,
    "fontWeight":key.styles.fontWeight,
    "fontSize":key.styles.fontSize,
    "text":"Career WAR"
  }).show()
  .move({
    "x":10,
    "y":7
  });


  return toReturn;
};

/* jshint esversion:6 */
ModelerKey.prototype.addPlayerProjections = function() {
  const key = this;
  let toReturn = {};

  toReturn.group = key.group
    .append("g");

  toReturn.line = toReturn.group
    .append("line")
    .attr("x1",-7.5)
    .attr("x2",7.5)
    .attr("y1",0)
    .attr("y2",0)
    .attr("stroke",key.styles.playerProjectionStroke)
    .attr("stroke-width",key.styles.lineStrokeWidth)
    .attr("stroke-dasharray",key.styles.playerProjectStrokeDasharray);

  toReturn.playerNameLabel = new TextLabel({
    "where":toReturn.group,
    "textAnchor":"start",
    "foregroundColor":key.styles.textColor,
    "fontFamily":key.styles.fontFamily,
    "fontWeight":key.styles.fontWeight,
    "fontSize":key.styles.fontSize,
    "text":""
  }).show()
  .move({
    "x":10,
    "y":-6
  });

  toReturn.warLabel = new TextLabel({
    "where":toReturn.group,
    "textAnchor":"start",
    "foregroundColor":key.styles.textColor,
    "fontFamily":key.styles.fontFamily,
    "fontWeight":key.styles.fontWeight,
    "fontSize":key.styles.fontSize,
    "text":"Projected WAR"
  }).show()
  .move({
    "x":10,
    "y":6
  });


  return toReturn;
};

/* jshint esversion:6 */
ModelerKey.prototype.addSimilarPlayers = function() {
  const key = this;
  let toReturn = {};

  toReturn.group = key.group
    .append("g");

  toReturn.line = toReturn.group
    .append("line")
    .attr("x1",-7.5)
    .attr("x2",7.5)
    .attr("y1",0)
    .attr("y2",0)
    .attr("stroke",key.styles.similarPlayersStroke)
    .attr("stroke-width",key.styles.lineStrokeWidth);

  toReturn.playerNameLabel = new TextLabel({
    "where":toReturn.group,
    "textAnchor":"start",
    "foregroundColor":key.styles.textColor,
    "fontFamily":key.styles.fontFamily,
    "fontWeight":key.styles.fontWeight,
    "fontSize":key.styles.fontSize,
    "text":"Similar Players"
  }).show()
  .move({
    "x":10,
    "y":-7
  });


  toReturn.warLabel = new TextLabel({
    "where":toReturn.group,
    "textAnchor":"start",
    "foregroundColor":key.styles.textColor,
    "fontFamily":key.styles.fontFamily,
    "fontWeight":key.styles.fontWeight,
    "fontSize":key.styles.fontSize,
    "text":"Career WAR"
  }).show()
  .move({
    "x":10,
    "y":7
  });


  return toReturn;
};

/* jshint esversion:6 */
ModelerKey.prototype.defineSize = function(options) {
  const key = this;
  let size = defaulter(options.size,{});

  size.height = defaulter(size.height,50);
  size.width = defaulter(size.width,433.33);

  return size;

  function defaulter(value,defaultValue) {
    return value === undefined ? defaultValue : value;
  }
};

/* jshint esversion:6 */
ModelerKey.prototype.defineStyles = function(options) {
  const key = this;
  let styles = defaulter(options.styles,{});

  styles.fontFamily = defaulter(styles.fontFamily,"Source Sans Pro");
  styles.fontSize = "10pt";
  styles.fontWeight = defaulter(styles.fontWeight,"normal");
  styles.lineStrokeWidth = defaulter(styles.lineStrokeWidth,4);
  styles.playerHistoryStroke = defaulter(styles.playerHistoryStroke,"#173f5f");
  styles.playerProjectionStroke = defaulter(styles.playerProjectionStroke,"#173f5f");
  styles.playerProjectStrokeDasharray = defaulter(styles.playerPrjectionStrokeDasharray,"3,3");
  styles.similarPlayersStroke = defaulter(styles.similarPlayersStroke,"#ddd");
  styles.contractValueStroke = defaulter(styles.contractValueStroke,"#ed553b");
  styles.errorRangeFill = defaulter(styles.errorRangeFill,"#bbd");
  styles.textColor = defaulter(styles.textColor,"#173f5f");

  return styles;

  function defaulter(setValue,defaultValue) {
    return setValue !== undefined ? setValue : defaultValue;
  }
};

/* jshint esversion:6 */
ModelerKey.prototype.defineVisibleKeys = function() {
  const key = this;
  let visible = {};

  visible.playerHistory = true;
  visible.playerProjections = true;
  visible.similarPlayers = true;
  visible.errorRange = true;
  visible.contractValue = true;

  return visible;
};

/* jshint esversion:6 */
ModelerKey.prototype.changeWarType = function(newType) {
  const key = this;

  key.playerHistory.warLabel
    .update("Career " + newType);

  key.playerProjections.warLabel
    .update("Projected " + newType);

  key.similarPlayers.warLabel
    .update("Career " + newType);

  return key;
};

/* jshint esversion:6 */
ModelerKey.prototype.definePlayerName = function(name) {
  const key = this;

  key.playerHistory.playerNameLabel
    .update(name);

  lkey.playerProjections.playerNameLabel
    .update(name);

  return key;
};

/* jshint esversion:6 */
ModelerKey.prototype.hideContractValue = function() {
  const key = this;

  key.contractValue.group
    .attr("display","none");

  key
    .layout();

  return key;
};

/* jshint esversion:6 */
ModelerKey.prototype.hideErrorRange = function() {
  const key = this;

  key.errorRange.group
    .attr("display","none");

  key
    .layout();

  return key;
};

/* jshint esversion:6 */
ModelerKey.prototype.hideSimilarPlayers = function() {
  const key = this;

  key.similarPlayers.group
    .attr("display","none");

  key
    .layout();

  return key;
};

/* jshint esversion:6 */
ModelerKey.prototype.layout = function() {
  const key = this;

  let trueValues = Object.keys(key.visibleKeys).filter((a) => { return key.visibleKeys[a]; }).length;
  let spacing = 140;

  let currentIndex = 0;
  let lastXPosition = 0;
  let yPosition = 0;
  let xPosition = 0;

  Object.keys(key.visibleKeys).forEach((keyName) => {
    if(key.visibleKeys[keyName]) {

      if((lastXPosition + spacing) > key.size.width) {
        yPosition += 45;
        xPosition = 0;
      } else {
        xPosition = lastXPosition;
      }

      key[keyName].group
        .attr("transform","translate("+xPosition+","+yPosition+")")
        .attr("display","block");

      currentIndex += 1;
      lastXPosition = xPosition + spacing;

    } else {
      key[keyName].group
        .attr("display","none");
    }

  });

  return key;
};

/* jshint esversion:6 */
ModelerKey.prototype.playerName = function(name) {
  const key = this;

  key.playerHistory.playerNameLabel
    .updateText(name);

  key.playerProjections.playerNameLabel
    .updateText(name);

  return key;
};

/* jshint esversion:6 */
ModelerKey.prototype.showContractValue = function() {
  const key = this;

  key.contractValue.group
    .attr("display","block");

  key
    .layout();

  return key;
};

/* jshint esversion:6 */
ModelerKey.prototype.showErrorRange = function() {
  const key = this;

  key.errorRange.group
    .attr("display","none");

  key
    .layout();

  return key;
};

/* jshint esversion:6 */
ModelerKey.prototype.showSimilarPlayers = function() {
  const key = this;

  key.similarPlayers.group
    .attr("display","none");

  key
    .layout();

  return key;
};

/* jshint esversion:6 */
ModelerPane.prototype.addContractDescription = function() {
  const pane = this;

  let div = pane.group
    .append("foreignObject")
    .attr("font-size","10pt")
    .attr("x",pane.referencePoints.overlayContractDescriptionCoordinates.x)
    .attr("y",pane.referencePoints.overlayContractDescriptionCoordinates.y)
    .attr("width",pane.referencePoints.overlayColumnWidth)
    .attr("height",pane.referencePoints.overlayDescriptionHeight)
    .style("text-align","left")
    .html("<strong>Drag</strong> the circle below to set the contract length.");

  return div;
};

/* jshint esversion:6 */
ModelerPane.prototype.addContractDurationLabel = function() {
  const pane = this;

  let text = pane.group
    .append("text")
    .attr("x",pane.referencePoints.overlayContractCoordinates.x)
    .attr("y",pane.referencePoints.overlayContractCoordinates.y)
    .attr("font-size","12pt")
    // .attr("font-weight","bold")
    .text("Contract Duration");

  return text;
};

/* jshint esversion:6 */
ModelerPane.prototype.addContractYearsSlider = function() {
  const pane = this;

  let slider;
  let maxYears = 40 - pane.parent.player.stats.stats["2018"].age;


  slider = new ModelSlider({
    "where":pane.group,
    "coordinates":pane.referencePoints.overlayContractSliderCoordinates,
    "formatter":(x) => { return x.toFixed(0) + " years" },
    "domain":[1,maxYears],
    "size":{
      "width":200
    },
    "styles":{
      "labelFontFill":"black",
      "labelFontSize":"12pt",
      "labelActiveFontSize":"14pt"
    },
    "callbacks":{
      "change":(newValue) => {
        // pane.killAllGlows();
        pane.contractValues.contractLength = +newValue.toFixed(0);
        pane.updateContractYears();

        pane.winValueChart
          .updateYears(pane.contractValues.contractLength);

        pane.salaryChart
          .updateYears(pane.contractValues.contractLength);

        pane.hasDragged = true;
      }
    }
  }).updateValue(3);


  return slider;
};

/* jshint esversion:6 */
ModelerPane.prototype.addGroup = function(where) {
  const pane = this;

  group = where
    .append("g")
    .attr("transform","translate("+pane.referencePoints.offscreen.x+","+pane.referencePoints.offscreen.y+")");

  return group;
};

/* jshint esversion:6 */
ModelerPane.prototype.addMarketValueDescription = function() {
  const pane = this;

  let div = pane.group
    .append("foreignObject")
    .attr("font-size","10pt")
    .attr("x",pane.referencePoints.overlayWinValueDescriptionCoordinates.x)
    .attr("y",pane.referencePoints.overlayWinValueDescriptionCoordinates.y)
    .attr("width",pane.referencePoints.overlayColumnWidth)
    .attr("height",pane.referencePoints.overlayDescriptionHeight)
    .style("text-align","left")
    .html("<strong>Drag</strong> the circles below to set the market rate for wins each season.");

  return div;
};

/* jshint esversion:6 */
ModelerPane.prototype.addMarketValueLabel = function() {
  const pane = this;

  let text = pane.group
    .append("text")
    .attr("x",pane.referencePoints.overlayWinValueCoordinates.x)
    .attr("y",pane.referencePoints.overlayWinValueCoordinates.y)
    .attr("font-size","12pt")
    .text("Market Value of Wins");


  return text;
};

/* jshint esversion:6 */
ModelerPane.prototype.addRect = function() {
  const pane = this;

  let rect = pane.group
    .append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("width",pane.size.width)
    .attr("height",pane.size.height)
    .attr("fill",pane.styles.backgroundColor)
    .attr("stroke","black")
    .attr("stroke-width",1);

  return rect;
};

/* jshint esversion:6 */
ModelerPane.prototype.addSalaryChart = function() {
  const pane = this;


  let chart = new WinChart({
    "where":pane.salaryGroup,
    "domain":[2,40],
    "size":{
      "width":pane.referencePoints.overlayColumnWidth,
      "height":pane.referencePoints.topThird * 1.5
    },
    "data":pane.contractValues.salary
  }).updateYears(3).addAAVSlider();

  return chart;
}

/* jshint esversion:6 */
ModelerPane.prototype.addSalaryDescription = function() {
  const pane = this;

  let div = pane.group
    .append("foreignObject")
    .attr("font-size","10pt")
    .attr("x",pane.referencePoints.overlaySalaryDescriptionCoordinates.x)
    .attr("y",pane.referencePoints.overlaySalaryDescriptionCoordinates.y)
    .attr("width",pane.referencePoints.overlayColumnWidth)
    .attr("height",pane.referencePoints.overlayDescriptionHeight)
    .style("text-align","left")
    .html("<strong>Drag</strong> the circles below to set the contract value.");

  return div;
};

/* jshint esversion:6 */
ModelerPane.prototype.addSalaryGroup = function() {
  const pane = this;

  let group = pane.group
    .append("g")
    .attr("transform","translate("+pane.referencePoints.salaryGroupCoordinates.x+","+pane.referencePoints.salaryGroupCoordinates.y+")");

  return group;
}

/* jshint esversion:6 */
ModelerPane.prototype.addSalaryLabel = function() {
  const pane = this;

  let text = pane.group
    .append("text")
    .attr("x",pane.referencePoints.overlaySalaryCoordinates.x)
    .attr("y",pane.referencePoints.overlaySalaryCoordinates.y)
    .attr("font-size","12pt")
    .text("Contract Cost");


  return text;
};

/* jshint esversion:6 */
ModelerPane.prototype.addSalarySlider = function() {
  const pane = this;

  let slider;

  return slider;
};

/* jshint esversion:6 */
ModelerPane.prototype.addSalarySliders = function() {
  const pane = this;

  let label = new TextLabel({
    "where":pane.group,
    "text":"Salary Per Year"
  })
  .show()
  .move({
    "x":pane.referencePoints.rightSixth + 100,
    "y":125
  });

  let sliders = [];

  d3.range(0,16).forEach((yearIndex) =>{
    let year = 2019 + yearIndex;
    let slider;

    slider = new Slider({
      "where":pane.group,
      "coordinates":{"x":pane.referencePoints.rightSixth - 50,"y":125 + yearIndex * pane.referencePoints.tableRowHeight},
      "label":"",
      "domain":[2,40],
      "defaultValue":pane.contractValues.salary[yearIndex],
      "significantDigits":2,
      "size":{
        "width":275
      }
    }).setDragCallback(function(newValue) {
      pane.contractValues.salary[yearIndex] = newValue;
      pane
        .updateContractValue();

      pane
        .killAllGlows();

      slider.valueLabel
        .updateText("$" + newValue.toFixed(2) + "M");

      pane.hasDragged = true;

    })
    .runGlow();

    slider.circleMouseover = pane.hintMouseover();
    slider.circleMouseout = pane.hintMouseout();

    sliders.push(slider);
  });

  return sliders;

  function sliderUpdate(newValue,yearIndex) {
    pane.contractValues.salary[yearIndex] = newValue;
    pane
      .updateContractValue();
  }

};

/* jshint esversion:6 */
ModelerPane.prototype.addSaveButton = function() {
  const pane = this;

  let button,
    rect,
    text;

  button = pane.group
    .append("g")
    .attr("cursor","pointer")
    .attr("transform","translate("+pane.referencePoints.saveButtonCoordinates.x+","+pane.referencePoints.saveButtonCoordinates.y+")")
    .on('click',function() {
      pane.finishEditing();
    });


  rect = button
    .append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("width",pane.referencePoints.saveButtonSize.width)
    .attr("height",pane.referencePoints.saveButtonSize.height)
    .attr("fill","green");

  text = button
    .append("text")
    .attr("x",pane.referencePoints.saveButtonSize.width / 2)
    .attr("y",pane.referencePoints.saveButtonSize.height / 2)
    .attr("font-size","14pt")
    .attr("font-weight","bold")
    .attr("text-anchor","middle")
    .attr("dominant-baseline","middle")
    .attr("fill","white")
    .text("SAVE");

  // button = new Button({
  //   "where":pane.group,
  //   "text":"Save",
  //   "coordinates":pane.referencePoints.buttonCoordinates
  // }).registerCallback(function() {
  //   pane.finishEditing();
  // });

  return button;
};

/* jshint esversion:6 */
ModelerPane.prototype.addTitle = function() {
  const pane = this;

  let title = pane.group
    .append("text")
    .attr("x",pane.referencePoints.titleCoordinates.x)
    .attr("y",pane.referencePoints.titleCoordinates.y)
    .attr("text-anchor","start")
    .attr("dominant-baseline","middle")
    .attr("font-size","14pt")
    .text("Simulate a Contract for " + pane.parent.name);

  return title;
};

/* jshint esversion:6 */
ModelerPane.prototype.addTotalContractValue = function() {
  const pane = this;

  let groupHeight = pane.referencePoints.topSixth;

  let toReturn = {};
  toReturn.group = pane.group
    .append("g")
    .attr("transform","translate(100,"+pane.referencePoints.bottomLine+")");

  toReturn.nameLabel = new TextLabel({
    "where":toReturn.group,
    "text":"Total Contract Cost",
    "fontFamily":pane.styles.fontFamily,
    "fontSize":pane.styles.contractCostLabelFontSize,
    "fontWeight":pane.styles.contractCostLabelFontWeight,
    "textAnchor":"middle"
  }).move({
    "x":0,
    "y":groupHeight / 4
  })
  .show();

  toReturn.contractValueLabel = new TextLabel({
    "where":toReturn.group,
    "text":"$MM",
    "fontFamily":pane.styles.fontFamily,
    "fontSize":pane.styles.contractCostFontSize,
    "fontWeight":pane.styles.contractCostFontWeight,
    "textAnchor":"middle"
  }).move({
    "x":0,
    "y":groupHeight * 2 / 3
  })
  .show();

  return toReturn;
};

/* jshint esversion:6 */
ModelerPane.prototype.addWinValueChart = function() {
  const pane = this;

  let chart = new WinChart({
    "where":pane.winValueGroup,
    "domain":[8,30],
    "size":{
      "width":pane.referencePoints.overlayColumnWidth,
      "height":pane.referencePoints.topThird * 1.5
    },
    "data":pane.contractValues.winValue
  }).updateYears(3);

  return chart;
}

/* jshint esversion:6 */
ModelerPane.prototype.addWinValueGroup = function() {
  const pane = this;

  let group = pane.group
    .append("g")
    .attr("transform","translate("+pane.referencePoints.winValueGroupCoordinates.x+","+pane.referencePoints.winValueGroupCoordinates.y+")");

  return group;
}

/* jshint esversion:6 */
ModelerPane.prototype.addWinValueTable = function() {
  const pane = this;


  d3.range(0,16).forEach((number) => {

    let year = number + 2019;

    let slider = new Slider({
      "where":pane.group,
      "label":year,
      "coordinates":{"x":500,"y":75 + (number * pane.referencePoints.overlaySliderHeight)},
      "domain":[8,30],
      "defaultValue":pane.contractValues.winValue[number],
      "significantDigits":0,
      "size":{
        "width":pane.referencePoints.overlayColumnWidth - 10,
        "height":20
      },
      "leftLabel":true
    }).setDragCallback((newValue) => {
      pane.contractValues.winValue[number] = +newValue.toFixed(2);
      pane.killAllGlows();
      pane.updateContractValue();
      pane.hasDragged = true;
    })
    .runGlow();

    pane.winValueSliders.push(slider);
  });

  return pane.winValueSliders;
};

/* jshint esversion:6 */
ModelerPane.prototype.addYearGroup = function() {
  const pane = this;

  let group = pane.group
    .append("g")
    .attr("transform","translate("+pane.referencePoints.yearGroupCoordinates.x+","+pane.referencePoints.yearGroupCoordinates.y+")");

  return group;
}

/* jshint esversion:6 */
ModelerPane.prototype.addYearLabels = function() {
  const pane = this;

  let labels = [];
  d3.range([0,16]).forEach((yearIndex) =>{
    let year = 2019 + yearIndex;
    let label = new TextLabel({
      "where":pane.yearGroup,
      "text":year,
      "textAnchor":"end"
    }).move({
      "x":0,
      "y":(yearIndex + 1) * pane.referencePoints.tableRowHeight
    })
    .show();

    labels.push(label);
  });


  return labels;
}

/* jshint esversion:6 */
ModelerPane.prototype.defineContractValues = function() {
  const pane = this;
  let values = {};
  values.contractLength = 3;
  values.aav = 10;
  values.salary = [];
  // TODO: COPY OVER WIN VALUES

  d3.range(0,16).forEach((year) => { values.salary.push(10); });
  values.winValue = [10.5,11.03,11.58,12.16,12.76,13.41,14.07,14.77,15.51,16.29,17.10,17.96,18.857,19.80,20.79,21.83];
  return values;
};

/* jshint esversion:6 */
ModelerPane.prototype.defineReferencePoints = function() {
  const pane = this;
  let referencePoints = {};

  referencePoints.centerX = pane.size.width / 2;
  referencePoints.centerY = pane.size.height / 3;
  referencePoints.topThird = pane.size.height / 3;
  referencePoints.topSixth = referencePoints.topThird / 2;
  referencePoints.secondThird = referencePoints.topThird * 2;

  referencePoints.titleCenter = referencePoints.topThird / 6;
  referencePoints.titleCoordinates = {"x":referencePoints.centerX,"y":referencePoints.titleCenter};
  referencePoints.contractSliderCenter = referencePoints.titleCenter * 2;

  referencePoints.rightSixth = pane.size.width / 6;
  referencePoints.rightThird = pane.size.width / 3;
  referencePoints.rightSecondThird = referencePoints.rightThird * 2;

  referencePoints.yearGroupCoordinates = {"x":referencePoints.rightSixth,"y":referencePoints.topThird};
  referencePoints.salaryGroupCoordinates = {"x":referencePoints.rightThird,"y":referencePoints.topSixth * 1.5 + 25};
  referencePoints.winValueGroupCoordinates = {"x":referencePoints.rightSecondThird,"y":referencePoints.topSixth * 1.5 + 25};

  referencePoints.topSixth = referencePoints.topThird / 2;

  referencePoints.bottomLine = pane.size.height - referencePoints.topSixth;
  referencePoints.bottomCenter = pane.size.height - (referencePoints.topSixth);

  referencePoints.tableRowHeight = (referencePoints.bottomLine - referencePoints.topThird) / 15;

  referencePoints.buttonCoordinates = {"x":referencePoints.rightSecondThird,"y":referencePoints.bottomCenter };

  referencePoints.offscreen = {"x":800,"y":0};
  referencePoints.onscreen = {"x":83.33,"y":0};


  referencePoints.titleCoordinates = {
    "x":30,
    "y":20.667
  };



  referencePoints.overlayPlaneSize = {
    "width":716.67,
    "height":500
  };

  referencePoints.overlayPlaneOffscreen = {
    "x":800,
    "y":0
  };

  referencePoints.overlayPlaneOnscreen = {
    "x":83.33,
    "y":0
  };

  referencePoints.overlayTitleCoordinates = {
    "x":14.92,
    "y":41.67
  };

  referencePoints.overlayContractCoordinates = {
    "x":30,
    "y":70
  };

  referencePoints.overlayContractDescriptionCoordinates = {
    "x":30,
    "y":75
  };

  referencePoints.overlayContractSliderCoordinates =  {
    "x":14.92,
    "y":referencePoints.topSixth * 1.5 + 20
  };

  referencePoints.overlaySalaryCoordinates = {
    "x":referencePoints.rightThird + 30,
    "y":70
  };

  referencePoints.overlaySalaryDescriptionCoordinates = {
    "x":referencePoints.rightThird + 30,
    "y":75
  };

  referencePoints.overlaySalarySliderCoordinates =  {
    "x":14.92,
    "y":230
  };

  referencePoints.overlayWinValueCoordinates = {
    "x":referencePoints.rightSecondThird + 30,
    "y":70
  };

  referencePoints.overlayWinValueDescriptionCoordinates = {
    "x":referencePoints.rightSecondThird + 30,
    "y":75
  };

  referencePoints.overlayWinValueTableCoordinates = {
    "x":492.94,
    "y":177.083
  };

  referencePoints.saveButtonCoordinates = {
    "x":492.94,
    "y":437.5
  };

  referencePoints.saveButtonSize = {
    "width":209.13,
    "height":41.667
  };

  referencePoints.contractDetailsHeadingCoordinates = {
    "x":625,
    "y":41.68
  };

  referencePoints.projectedSurplusHeadingCoordinates = {
    "x":566.67,
    "y":72.92
  };

  referencePoints.projectedSurplusValueCoordinates = {
    "x":566.67,
    "y":93.75
  };

  referencePoints.contractValueHeadingCoordinates = {
    "x":700,
    "y":72.92
  };

  referencePoints.contractValueCoordinates = {
    "x":700,
    "y":93.75
  };

  referencePoints.editSalaryButtonCoordinates = {
    "x":566.67,
    "y":197.92
  };

  referencePoints.winValueButtonCoordinates = {
    "x":700,
    "y":197.92
  };

  referencePoints.contractTableCoordinates = {
    "x":483.333,
    "y":197.92
  };

  referencePoints.contractTableSize = {
    "width":300,
    "height":260.41
  };

  referencePoints.overlayColumnWidth = 209.13;
  referencePoints.overlayDescriptionHeight = 41.667;
  referencePoints.overlaySliderHeight = 20;
  referencePoints.overlayColumnTableHeight = 218.75;



  return referencePoints;
};

/* jshint esversion:6 */
ModelerPane.prototype.defineSize = function(options) {
  const pane = this;
  let size = defaulter(options.size,{});

  size.height = defaulter(size.height,500);
  size.width = defaulter(size.width,717);

  return size;

  function defaulter(setValue,defaultValue) {
    return setValue ? setValue : defaultValue;
  }
};

/* jshint esversion:6 */
ModelerPane.prototype.defineStyles = function(options) {
  const pane = this;
  let styles = defaulter(options.styles,{});

  styles.backgroundColor = defaulter(styles.backgroundColor,"white");
  styles.fontFamily = defaulter(styles.fontFamily,"Source Sans Pro");
  styles.titleFontSize = defaulter(styles.titleFontSize,"16pt");
  styles.titleFontWeight = defaulter(styles.titleFontWeight,"bold");

  styles.contractCostLabelFontSize = defaulter(styles.contractCostLabelFontSize,"10pt");
  styles.contractCostLabelFontWeight = defaulter(styles.contractCostLabelFontWeight,"normal");

  styles.contractCostFontSize = defaulter(styles.contractCostFontSize,"14pt");
  styles.contractCostFontWeight = defaulter(styles.contractCostFontWeight,"bold");

  return styles;
  
  function defaulter(setValue,defaultValue) {
    return setValue ? setValue : defaultValue;
  }
};

/* jshint esversion:6 */
ModelerPane.prototype.finishEditing = function() {
  const pane = this;

  pane.contractValues.aav = pane.salaryChart.aavSlider.currentValue;

  pane
    .transitionOut();

  pane.parent
    .dataFromPane(pane.contractValues);

  return pane;
};

/* jshint esversion:6 */
ModelerPane.prototype.hintMouseout = function() {
  return () => {
    const pane = this;

    pane.tooltip
      .hide();
      
    return pane;
  };
};

/* jshint esversion:6 */
ModelerPane.prototype.hintMouseover = function() {
  return () => {
    const pane = this;
    if(!pane.hasDragged) {
      pane.tooltip
        .update("Click and drag to change value.")
        .show()
        .move();      
    }
    return pane;
  };
};

/* jshint esversion:6 */
ModelerPane.prototype.killAllGlows = function() {
  const modeler = this;

  modeler.contractSlider
    .killGlow();

  modeler.salarySlider
    .killGlow();

  modeler.winValueSliders.forEach((slider) => {
    slider
      .killGlow();
  });

  return modeler;
};

/* jshint esversion:6 */
ModelerPane.prototype.registerTooltip = function(tooltip) {
  const pane = this;

  pane.tooltip = tooltip;

  return pane;
};

/* jshint esversion:6 */
ModelerPane.prototype.transitionIn = function() {
  const pane = this;

  pane.group
    .transition()
    .duration(500)
    .attr("transform","translate("+pane.referencePoints.onscreen.x+","+pane.referencePoints.onscreen.y+")");

  return pane;
};

/* jshint esversion:6 */
ModelerPane.prototype.transitionOut = function() {
  const pane = this;

  pane.group
    .transition()
    .duration(225)
    .attr("transform","translate("+pane.referencePoints.offscreen.x+","+pane.referencePoints.offscreen.y+")");

  return pane;
};

/* jshint esversion:6 */
ModelerPane.prototype.updateContractValue = function() {
  const pane = this;


  let totalValue;
  totalValue = 0;

  totalValue = pane.contractValues.contractLength * pane.contractValues.aav;

  // pane.salarySlider.valueLabel.updateText("$" + pane.contractValues.aav.toFixed(2) + "M");

  // pane.contractValues.winValue.forEach((value,yearIndex) => {
  //   pane.winValueSliders[yearIndex].valueLabel.updateText("$" + pane.contractValues.winValue[yearIndex].toFixed(2) + "M");
  // });


  // pane.totalContractValue.contractValueLabel
  //   .updateText("$" + totalValue.toFixed(0) + "mm");

  return pane;
};

/* jshint esversion:6 */
ModelerPane.prototype.updateContractYears = function() {
  const pane = this;

  //
  // pane.winValueSliders.forEach((slider,yearIndex) => {
  //   if(yearIndex >= pane.contractValues.contractLength) {
  //     slider
  //       .hide();
  //   } else {
  //     slider
  //       .show();
  //   }
  // });

  pane
    .updateContractValue();


  return pane;
};

/* jshint esversion:6 */
Numberline.prototype.addBottomLine = function() {
  const chart = this;

  let bottomLine = chart.layers.base
    .append("line")
    .attr("stroke","#999")
    .attr("stroke-width",1)
    .attr("stroke-dasharray","1,3")
    .attr("x1",0)
    .attr("x2",chart.size.width)
    .attr("y1",chart.size.height - chart.margins.bottom)
    .attr("y2",chart.size.height - chart.margins.bottom);

  return bottomLine;
}

/* jshint esversion:6 */
Numberline.prototype.addLayers = function(where) {
  const chart = this;

  let layers = {};

  layers.base = chart.singleLayer(where);
  layers.labels = chart.singleLayer(where);
  layers.summaryIndicators = chart.singleLayer(where);
  layers.axis = chart.singleLayer(where);
  layers.baseData = chart.singleLayer(where);
  layers.highlightData = chart.singleLayer(where);
  layers.activeLayer = chart.singleLayer(where);

  return layers;
};

/* jshint esversion:6 */
Numberline.prototype.singleLayer = function(where) {
  let layer;

  layer = where
    .append("g");

  return layer;
};

/* jshint esversion:6 */
Numberline.prototype.addSvg = function(where) {
  const chart = this;

  let svg;

  svg = where
    .append("svg")
    .attr("width",chart.size.width)
    .attr("height",chart.size.height)
    .on('mouseleave',() => {
      chart.tooltip.hide();
    });

  return svg;

};

/* jshint esversion:6 */
Numberline.prototype.defaultMargins = function(options) {
  const chart = this;
  let margins = {};
  options.margins = chart.defaulter(options.margins,{});
  margins.left = chart.defaulter(options.margins.left,10);
  margins.right = chart.defaulter(options.margins.right,10);
  margins.top = chart.defaulter(options.margins.top,5);
  margins.bottom = chart.defaulter(options.margins.bottom,10);
  return margins;  
};

/* jshint esversion:6 */
Numberline.prototype.defaultSize = function(options) {
  const chart = this;

  let size = {};
  options.size = chart.defaulter(options.size,{});
  size.height = chart.defaulter(options.height,40);
  size.width = chart.defaulter(options.width,500);
  return size;
};

/* jshint esversion:6 */
Numberline.prototype.defaultStyles = function(options) {
  const chart = this;
  let styles = {};
  options.styles = chart.defaulter(options.styles,{});
  styles.inactiveCircleRadius = chart.defaulter(options.styles.inactiveCircleRadius,3);
  styles.inactiveCircleFill  = chart.defaulter(options.styles.inactiveCircleFill,"#fff");
  styles.inactiveCircleOpacity = chart.defaulter(options.styles.inactiveCircleOpacity,1);
  styles.inactiveCircleStroke = chart.defaulter(options.styles.inactiveCircleStroke,"#333");
  styles.inactiveCircleStrokeWidth = chart.defaulter(options.styles.inactiveCircleStrokeWidth,1);

  styles.activeCircleRadius = chart.defaulter(options.activeCircleRadius,7);
  styles.activeCircleFill = chart.defaulter(options.styles.activeCircleFill,"#3caea3");
  styles.activeCircleOpacity = chart.defaulter(options.styles.activeCircleFillOpacity,1.0);
  styles.activeCircleStroke = chart.defaulter(options.styles.activeCircleStroke,"red");
  styles.activeCircleStrokeWidth = chart.defaulter(options.styles.activeCircleStrokeWidth,10);

  styles.highlightedCircleRadius = chart.defaulter(options.styles.highlightedCircleRadius,5);
  styles.highlightedCircleFill = chart.defaulter(options.styles.highlightedCircleFill,"#f6d55c");
  styles.highlightedCircleOpacity = chart.defaulter(options.styles.highlightedCircleOpacity,1.0);
  styles.highlightedCircleStroke = chart.defaulter(options.styles.highlightedCircleStroke,"gray");
  styles.highlightedCircleStrokeWidth = chart.defaulter(options.styles.highlightedCircleStrokeWidth,1);

  styles.meanIndicatorStroke = "black";
  styles.meanIndicatorStrokeWidth = 2;
  styles.oneStandardDeviationIndicatorFill = "#4978A4";
  styles.twoStandardDeviationIndicatorFill = "#D7DDE3";
  styles.indicatorFontSize = "8pt";
  styles.indicatorFontFamily = "Helvetica Neue";
  styles.indicatorFill = "#666";
  styles.indicatorHighlightColor = "#ed553b";
  styles.indicatorHighlightStrokeWidth = 3;

  return styles;
};

/* jshint esversion: 6 */
Numberline.prototype.defaulter = function(option,defaultValue) {
  return value = option ? option : defaultValue;
};

/* jshint esversion:6 */
Numberline.prototype.defineReferencePoints = function() {
  const chart = this;
  let referencePoints = {};

  referencePoints.effectiveHeight = chart.size.height - chart.margins.top - chart.margins.bottom;
  referencePoints.midline = chart.margins.top + referencePoints.effectiveHeight / 2;
  referencePoints.bottomBaseline = chart.size.height - chart.margins.bottom;

  return referencePoints;
};

/* jshint esversion:6 */
Numberline.prototype.defineScale = function() {
  const chart = this;
  let scale;

  scale = d3.scaleLinear()
    .range([chart.margins.left,chart.size.width - chart.margins.right]);

  return scale;
};

/* jshint esversion:6 */
Numberline.prototype.addBackgroundCircles = function(dataset) {
  const chart = this;

  let selection;

  chart.setBackgroundCircleMouseover();
  chart.setBackgroundCircleMouseout();


  selection = chart.layers.baseData
    .selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cursor","pointer")
    .attr("cx",function(d) { return chart.scale(d.value); })
    .attr("cy",chart.referencePoints.midline)
    .attr("r",chart.styles.inactiveCircleRadius)
    .attr("fill",chart.styles.inactiveCircleFill)
    .attr("stroke",chart.styles.inactiveCircleStroke)
    .attr("stroke-width",chart.styles.inactiveCircleStrokeWidth)
    .attr("opacity",chart.styles.inactiveCircleOpacity)
    .on('mouseover',chart.handleBackgroundCircleMouseover)
    .on('mousemove',function() {
      chart.tooltip
        .move();
    });


  return selection;
};

/* jshint esversion:6 */
Numberline.prototype.addData = function(dataset) {
  const chart = this;
  let values = dataset.map((d) =>  {return d.value;});

  chart
    .updateScale(values);

  chart.summaryData = chart
    .calculateSummaryData(values);

  chart.twoStandardDeviationIndicators = chart
    .addTwoStandardDeviationIndicators();

  chart.oneStandardDeviationIndicator = chart
    .addOneStandardDeviationIndicator();

  chart.meanIndicator = chart
    .addmeanIndicator();

  chart.highlightCircle = chart
    .addHighlightCircle();

  chart.backgroundCircles = chart
    .addBackgroundCircles(dataset);

  chart.meanText = chart
    .addMeanText();

  chart.oneDeviationText = chart
    .addOneDeviationText();

  chart.twoDeviationText = chart
    .addTwoDeviationText();

  return chart;
};

/* jshint esversion:6 */
Numberline.prototype.addHighlightCircle = function() {
  const chart = this;

  let circle;

  circle = chart.layers.highlightData
    .append("circle")
    .attr("r",chart.styles.inactiveCircleRadius)
    .attr("cy",chart.referencePoints.midline)
    .attr("fill",chart.styles.activeCircleFill)
    .attr("stroke",chart.styles.highlightCircleStroke)
    .attr("stroke-width",chart.styles.highlightCircleStrokeWidth)
    .attr("opacity",chart.styles.highlightStrokeOpacity)
    .attr("cursor","pointer")
    .style("display","none")
    .on('mouseout',chart.handleBackgroundCircleMouseout)
    .on('mouseout',chart.handleBackgroundCircleMouseout)
    .on('mousemove',function() {
      chart.tooltip
        .move();
    });

  return circle;
};

/* jshint esversion:6 */
Numberline.prototype.addHighlightValue = function(datum,player) {
  const chart = this;

  let circle;

  chart.highlightDatum = datum;

  chart.highlightValueCircle = chart.layers.activeLayer
    .append("circle")
    .attr("cy",chart.referencePoints.midline)
    .attr("cx",chart.scale(datum))
    .attr("r",chart.styles.highlightedCircleRadius)
    .attr("stroke","black")
    .attr("fill",chart.styles.highlightedCircleFill)
    .on('mouseover',function(d) {
      chart.tooltip
        .showNumberlineDatum({
          "chartName":d.key,
          "name":player.Name,
          "value":datum,
          "summaryData":chart.summaryData
        })
    })
    .on('mouseout',function() {
      chart.tooltip
        .hide();
    })
    .on('mousemove',function() {
      chart.tooltip
        .move();
    })

  return chart;
};

/* jshint esversion:6 */
Numberline.prototype.addmeanIndicator = function() {
  const chart = this;

  let indicator = chart.layers.summaryIndicators
    .append("line")
    .attr("y1",chart.margins.top)
    .attr("y2",chart.size.height - chart.margins.bottom)
    .attr("x1",chart.scale(chart.summaryData.mean))
    .attr("x2",chart.scale(chart.summaryData.mean))
    .attr("stroke",chart.styles.meanIndicatorStroke)
    .attr("stroke-width",chart.styles.meanIndicatorStrokeWidth);

  return indicator;
};

/* jshint esversion:6 */
Numberline.prototype.addMeanText = function() {
  const chart = this;

  let text;

  text = chart.layers.axis
    .append("text")
    .attr("text-anchor","middle")
    .attr("dominant-baseline","text-before-edge")
    .attr("x",chart.scale(chart.summaryData.mean))
    .attr("y",chart.referencePoints.bottomBaseline)
    .attr("font-family",chart.styles.indicatorFontFamily)
    .attr("font-size",chart.styles.indicatorFontSize)
    .attr("fill",chart.styles.indicatorFill)
    .attr("cursor","pointer")
    .html("&mu;")
    .on('mouseover',() => {
      chart.meanIndicator
        .attr("stroke-width",chart.styles.indicatorHighlightStrokeWidth)
        .attr("stroke",chart.styles.indicatorHighlightColor);

      chart.meanText
        .attr("fill",chart.styles.indicatorHighlightColor);

      chart.tooltip
        .showNumberlineMean(chart.summaryData,chart.options.name);

    })
    .on('mouseout',() => {
      chart.meanIndicator
        .attr("stroke-width",chart.styles.meanIndicatorStrokeWidth)
        .attr("stroke",chart.styles.meanIndicatorStroke);

      chart.meanText
        .attr("fill",chart.styles.indicatorFill);

      chart.tooltip
        .hide();
    });

  return text;
};

/* jshint esversion:6 */
Numberline.prototype.addOneDeviationText = function() {
  const chart = this;

  let indicators = {};

  let highlightOneDeviation = () => {
    chart.oneStandardDeviationIndicator
      .attr("stroke",chart.styles.indicatorHighlightColor)
      .attr("stroke-width",chart.styles.meanIndicatorStrokeWidth);

    chart.oneDeviationText.negative
      .attr("fill",chart.styles.indicatorHighlightColor);

    chart.oneDeviationText.positive
      .attr("fill",chart.styles.indicatorHighlightColor);

    chart.tooltip
      .showOneStandardDeviation(chart.summaryData,chart.options.name);

  };

  let unhighlightOneDeviation = () => {
    chart.oneStandardDeviationIndicator
      .attr("stroke","none");

    chart.oneDeviationText.negative
      .attr("fill",chart.styles.indicatorFill);

    chart.oneDeviationText.positive
      .attr("fill",chart.styles.indicatorFill);

    chart.tooltip
      .hide();
  };

  indicators.negative = chart.layers.axis
    .append("text")
    .attr("text-anchor","middle")
    .attr("dominant-baseline","text-before-edge")
    .attr("x",chart.scale(chart.summaryData.oneBelowStandardDeviation))
    .attr("y",chart.referencePoints.bottomBaseline)
    .attr("font-family",chart.styles.indicatorFontFamily)
    .attr("font-size",chart.styles.indicatorFontSize)
    .attr("fill",chart.styles.indicatorFill)
    .attr("cursor","pointer")
    .html("-&sigma;")
    .on('mouseover',highlightOneDeviation)
    .on('mouseout',unhighlightOneDeviation);

  indicators.positive = chart.layers.axis
    .append("text")
    .attr("text-anchor","middle")
    .attr("dominant-baseline","text-before-edge")
    .attr("x",chart.scale(chart.summaryData.oneAboveStandardDeviation))
    .attr("y",chart.referencePoints.bottomBaseline)
    .attr("font-family",chart.styles.indicatorFontFamily)
    .attr("font-size",chart.styles.indicatorFontSize)
    .attr("fill",chart.styles.indicatorFill)
    .attr("cursor","pointer")
    .html("+&sigma;")
    .on('mouseover',highlightOneDeviation)
    .on('mouseout',unhighlightOneDeviation);

  return indicators;
};

/* jshint esversion: 6*/
Numberline.prototype.addOneStandardDeviationIndicator = function() {
  const chart = this;

  let indicator;

  indicator = chart.layers.summaryIndicators
    .append("rect")
    .attr("x",chart.scale(chart.summaryData.oneBelowStandardDeviation))
    .attr("y",chart.margins.top + 6)
    .attr("width",chart.scale(chart.summaryData.oneAboveStandardDeviation) - chart.scale(chart.summaryData.oneBelowStandardDeviation))
    .attr("height",12)
    .attr("fill",chart.styles.oneStandardDeviationIndicatorFill);

  return indicator;
};

/* jshint esversion:6 */
Numberline.prototype.addTwoDeviationText = function() {
  const chart = this;

  let indicators = {};


  let highlightTwoDeviations = () => {
    chart.twoStandardDeviationIndicators
      .attr("stroke",chart.styles.indicatorHighlightColor)
      .attr("stroke-width",chart.styles.meanIndicatorStrokeWidth);

    chart.twoDeviationText.negative
      .attr("fill",chart.styles.indicatorHighlightColor);

    chart.twoDeviationText.positive
      .attr("fill",chart.styles.indicatorHighlightColor);

    chart.tooltip
      .showTwoStandardDeviations(chart.summaryData,chart.options.name);

  };

  let unhighlightTwoDeviations = () => {
    chart.twoStandardDeviationIndicators
      .attr("stroke","none");

    chart.twoDeviationText.negative
      .attr("fill",chart.styles.indicatorFill);

    chart.twoDeviationText.positive
      .attr("fill",chart.styles.indicatorFill);

    chart.tooltip
      .hide();

  };

  indicators.negative = chart.layers.axis
    .append("text")
    .attr("text-anchor","middle")
    .attr("dominant-baseline","text-before-edge")
    .attr("x",chart.scale(chart.summaryData.twoBelowStandardDeviation))
    .attr("y",chart.referencePoints.bottomBaseline)
    .attr("font-family",chart.styles.indicatorFontFamily)
    .attr("font-size",chart.styles.indicatorFontSize)
    .attr("fill",chart.styles.indicatorFill)
    .attr("cursor","pointer")
    .html("-2&sigma;")
    .on('mouseover',highlightTwoDeviations)
    .on('mouseout',unhighlightTwoDeviations);

  indicators.positive = chart.layers.axis
    .append("text")
    .attr("text-anchor","middle")
    .attr("dominant-baseline","text-before-edge")
    .attr("x",chart.scale(chart.summaryData.twoAboveStandardDeviation))
    .attr("y",chart.referencePoints.bottomBaseline)
    .attr("font-family",chart.styles.indicatorFontFamily)
    .attr("font-size",chart.styles.indicatorFontSize)
    .attr("fill",chart.styles.indicatorFill)
    .attr("cursor","pointer")
    .html("+2&sigma;")
    .on('mouseover',highlightTwoDeviations)
    .on('mouseout',unhighlightTwoDeviations);

  return indicators;
};

/* jshint esversion:6 */
Numberline.prototype.addTwoStandardDeviationIndicators = function() {
  const chart = this;

  let indicator;

  indicator = chart.layers.summaryIndicators
    .append("rect")
    .attr("x",chart.scale(chart.summaryData.twoBelowStandardDeviation))
    .attr("y",chart.margins.top + 7)
    .attr("width",chart.scale(chart.summaryData.twoAboveStandardDeviation) - chart.scale(chart.summaryData.twoBelowStandardDeviation))
    .attr("height",10)
    .attr("fill",chart.styles.twoStandardDeviationIndicatorFill);

  return indicator;
};

/* jshint esversion:6*/
Numberline.prototype.calculateSummaryData = function(values) {
  let summaryData = {};

  summaryData.mean = d3.mean(values);
  summaryData.standardDeviation = d3.deviation(values);
  summaryData.oneAboveStandardDeviation = summaryData.mean + summaryData.standardDeviation;
  summaryData.twoAboveStandardDeviation = summaryData.mean + 2 * summaryData.standardDeviation;
  summaryData.oneBelowStandardDeviation = summaryData.mean - summaryData.standardDeviation;
  summaryData.twoBelowStandardDeviation = summaryData.mean - 2 * summaryData.standardDeviation;

  return summaryData;
};

/* jshint esversion:6 */
Numberline.prototype.getDomain = function() {
  const line = this;
  return line.scale.domain();
}

/* jshint esversion:6 */
Numberline.prototype.hideHighlight = function() {
  const chart = this;

  chart.highlightCircle
    .style("display","none");

  return chart;
};

/* jshint esversion:6 */
Numberline.prototype.registerTooltip = function(tooltip) {
  const chart = this;

  chart.tooltip = tooltip;

  return chart;
};

/* jshint esversion:6 */
Numberline.prototype.rescale = function(newDomain) {
  const chart = this;

  chart.scale
    .domain(newDomain);

  chart.backgroundCircles
    .attr("cx",function(d) { return chart.scale(d.value); });

  chart.meanText
    .attr("x",chart.scale(chart.summaryData.mean));

  chart.meanIndicator
    .attr("x1",chart.scale(chart.summaryData.mean))
    .attr("x2",chart.scale(chart.summaryData.mean));

  chart.oneDeviationText.positive
    .attr("x",chart.scale(chart.summaryData.oneAboveStandardDeviation));

  chart.oneDeviationText.negative
    .attr("x",chart.scale(chart.summaryData.oneBelowStandardDeviation));

  chart.twoDeviationText.positive
    .attr("x",chart.scale(chart.summaryData.twoAboveStandardDeviation));

  chart.twoDeviationText.negative
    .attr("x",chart.scale(chart.summaryData.twoBelowStandardDeviation));

  chart.oneStandardDeviationIndicator
    .attr("x",chart.scale(chart.summaryData.oneBelowStandardDeviation))
    .attr("width",chart.scale(chart.summaryData.oneAboveStandardDeviation) - chart.scale(chart.summaryData.oneBelowStandardDeviation));

  chart.twoStandardDeviationIndicators
    .attr("x",chart.scale(chart.summaryData.twoBelowStandardDeviation))
    .attr("width",chart.scale(chart.summaryData.twoAboveStandardDeviation) - chart.scale(chart.summaryData.twoBelowStandardDeviation));

  chart.highlightValueCircle
    .attr("cx",chart.scale(chart.highlightDatum));

  return chart;
}

/* jshint esversion:6 */
Numberline.prototype.scalePercentage = function() {
  const chart = this;

  chart
    .rescale([0,100]);

  return chart;
}

/* jshint esversion:6*/
Numberline.prototype.setBackgroundCircleMouseout = function() {
  const chart = this;

  chart.backgroundCircleMouseout = (circle,datum) => {

    chart
      .hideHighlight();

    chart
      .tooltip
      .hide();
  };

};

/* jshint esversion:6 */
Numberline.prototype.setBackgroundCircleMouseover = function() {
  const chart = this;

  chart.backgroundCircleMouseover = (circle,datum) => {
    chart.showHighlight(datum);
    let toPass = datum;
    toPass.value = circle.datum().value;
    toPass.chartName = chart.options.name;
    toPass.summaryData = chart.summaryData;
    chart.tooltip.showNumberlineDatum(toPass);
  };

};

/* jshint esversion:6 */
Numberline.prototype.showHighlight = function(datum) {
  const chart = this;

  chart.highlightCircle
    .attr("cx",chart.scale(datum.value))
    .style("display","block");

  return chart;
};

/* jshint esversion:6 */
Numberline.prototype.updateScale = function(values) {
  const chart = this;

  let extent,
    rangeMax,
    rangeMin;

  extent = d3.extent(values);
  rangeMax = chart.options.max !== undefined ? chart.options.max : extent[1];
  rangeMin = chart.options.min !== undefined ? chart.options.min : extent[0];

  chart.scale
    .domain([rangeMin,rangeMax]);

  return chart;
};

/* jshint esversion:6 */
NumberlineReference.prototype.addBottomLine = function() {
  const chart = this;
  let line;

  line = chart.svg
    .append("line")
    .attr("x1",0)
    .attr("x2",500)
    .attr("y1",19)
    .attr("y2",19)
    .attr("stroke","#aaa")
    .attr("stroke-dasharray","1,3")

  return line;
};

/* jshint esversion:6 */
NumberlineReference.prototype.addCircleKey = function() {
  const line = this;

  let circleKey = line.svg
    .append("g")
    .attr("transform","translate(225,12)");

  circleKey
    .append("circle")
    .attr("cx",0)
    .attr("cy",0)
    .attr("r",4)
    .attr("fill","#f6d55c")
    .attr("stroke","black");

  circleKey
    .append("text")
    .attr("x",8)
    .attr("y",0)
    .attr("dominant-baseline","middle")
    .attr("font-family","Source Sans Pro")
    .attr("font-weight","normal")
    .attr("font-size","8pt")
    .text(line.playerName + " 2018 Season");


  return circleKey;
}

/* jshint esversion:6 */
NumberlineReference.prototype.addLeftText = function() {
  const chart = this;
  let text;

  text = chart.svg
    .append("text")
    .attr("font-size",chart.styles.fontSize)
    .attr("fill",chart.styles.leftFill)
    .attr("font-family",chart.styles.fontFamily)
    .attr("font-weight","lighter")
    .attr("text-anchor","start")
    .attr("dominant-baseline","baseline")
    .attr("x",0)
    .attr("y",17)
    .html(chart.labels.left);


  return text;
};

/* jshint esversion:6 */
NumberlineReference.prototype.addQualifierKey = function() {
  const line = this;

  let circleKey = line.svg
    .append("g")
    .attr("transform","translate(100,12)");

  circleKey
    .append("circle")
    .attr("cx",0)
    .attr("cy",0)
    .attr("r",3)
    .attr("fill","white")
    .attr("stroke","black");

  circleKey
    .append("text")
    .attr("x",8)
    .attr("y",0)
    .attr("dominant-baseline","middle")
    .attr("font-family","Source Sans Pro")
    .attr("font-weight","normal")
    .attr("font-size","8pt")
    .text("2018 Qualified Players");


  return circleKey;
}

/* jshint esversion:6 */
NumberlineReference.prototype.addRightText = function() {
  const chart = this;
  let text;

  text = chart.svg
    .append("text")
    .attr("font-size",chart.styles.fontSize)
    .attr("fill",chart.styles.rightFill)
    .attr("font-family",chart.styles.fontFamily)
    .attr("font-weight","lighter")
    .attr("text-anchor","end")
    .attr("dominant-baseline","baseline")
    .attr("x",500)
    .attr("y",17)
    .html(chart.labels.right);

  return text;
};

/* jshint esversion:6 */
NumberlineReference.prototype.addSvg = function(where) {
  const chart = this;
  let svg;

  svg = where
    .append("svg")
    .attr("height",20)
    .attr("width",500);

  return svg;
};

/* jshint esversion:6 */
NumberlineReference.prototype.defineLabels = function(type) {
  const chart = this;
  let labels = {};

  if(type == "fewer-wins-more-wins") {
    labels.left = "&larr; Fewer Wins";
    labels.right = "More Wins &rarr;"
  }

  if(type == "fewer-runs-more-runs") {
    labels.left = "&larr; Fewer Runs";
    labels.right = "More Runs &rarr;"
  }

  if(type == "fewer-hits-more-hits") {
    labels.left = "&larr; Better";
    labels.right = "Worse &rarr;"
  }


  if(type == "less-production-more-production") {
    labels.left = "&larr; Less Production";
    labels.right = "More Production &rarr;";
  }

  if(type == "more-outs-fewer-outs") {
    labels.left = "&larr; More Outs";
    labels.right = "Fewer Outs &rarr;";
  }

  if(type == "less-power-more-power") {
    labels.left = "&larr; Less Power";
    labels.right = "More Power &rarr;"
  }

  if(type == "worst-best") {
    labels.left = "&larr; Worse";
    labels.right = "Better &rarr;";
  }

  if(type == "slower-faster-hits") {
    labels.left = "&larr;Softer Hits";
    labels.right = "Harder Hits&rarr;";
  }

  if(type =="lower-higher") {
    labels.left = "&larr;Lower";
    labels.right = "Higher &rarr;";
  }

  if(type =="groundballs-flyballs") {
    labels.left = "&larr;More Fly Balls";
    labels.right = "More Ground Balls &rarr;";
  }

  if(type =="never-always") {
    labels.left = "&bull; Never";
    labels.right = "Always &bull;";
  }

  if(type =="strikeouts-walks") {
    labels.left = "&larr; More Strikeouts";
    labels.right = "More Walks &rarr;";
  }

  return labels;
};

/* jshint esversion:6 */
NumberlineReference.prototype.defineStyles = function() {
  let styles = {};

  styles.fontSize = "8pt";
  styles.fontFamily = "Source Sans Pro";
  styles.leftFill = "black";
  styles.rightFill = "black";

  return styles;
};

/* jshint esversion:6 */
PitcherConfig.prototype.defineBBRefValue = function() {
  const config = this;

  let group = {
    "heading":"Baseball-Reference",
    "description":"Total contribution data from Baseball-Reference.com",
    "metrics":[]
  };

  group.metrics.push({
    "key":"",
    "display":"",
    "description":"",
    "source":"",
    "isHeader":true,
    "headerType":"fewer-wins-more-wins",
    "startGroup":true
  });


  group.metrics.push({
    "key":"bWar",
    "display":"Baseball-Reference WAR",
    "description":"Baseball-Reference Wins Above Replacement. Measures total player contribution in terms of marginal team wins.",
    "source":"Baseball-Reference",
    "startGroup":true,
    "endGroup":true
  });

  group.metrics.push({
    "isSpacer":true
  });

  return group;
};

/* jshint esversion:6 */
PitcherConfig.prototype.defineBattedBallLocation = function() {
  const config = this;

  let group = {
    "heading":"Ball Location",
    "description":"Measures of batted ball tendencies against this pitcher.",
    "metrics":[]
  };

  group.metrics.push({
    "isHeader":true,
    "startGroup":true,
    "headerType":"never-always"
  })

  group.metrics.push({
    "key":"pull_field_against",
    "display":"Pull %",
    "description":"Percentage of balls hit to the pull field.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "scalePercentage":true,
    "startGroup":true
  });

  group.metrics.push({
    "key":"center_field_against",
    "display":"Center %",
    "description":"Percentage of balls hit to center field.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "scalePercentage":true
  });

  group.metrics.push({
    "key":"opposite_field_against",
    "display":"Opposite %",
    "description":"Percentage of balls hit to the opposite field.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "scalePercentage":true,
    "endGroup":true
  });


  return group;
}

/* jshint esversion:6 */
PitcherConfig.prototype.definePitchingOutcomes = function() {
  const config = this;
  let group;

  group = {
    "display":"Pitching Outcomes",
    "description":"Measures of the outcomes of plate appearances."
  };

  let subGroups = [
      config.definePitchingOutcomesOverview(),
      config.definePitcherControl(),
      config.defineTeamResults(),
      config.defineBattedBallLocation(),
      config.defineContactType()
    ];

  return subGroups;
};

/* jshint esversion:6 */
PitcherConfig.prototype.defineContactType = function() {
  const config = this;

  let group = {
    "heading":"Contact Strength",
    "description":"Measures of the strength of contact of hits against the pitcher.",
    "metrics":[]
  };

  group.metrics.push({
    "isHeader":true,
    "startGroup":true,
    "headerType":"never-always"
  })

  group.metrics.push({
    "key":"hard_hits_against",
    "display":"Hard %",
    "description":"Percentage of contact classified as 'Hard'.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "scalePercentage":true,
    "startGroup":true
  });

  group.metrics.push({
    "key":"medium_hits_against",
    "display":"Medium %",
    "description":"Percentage of contact classified as 'Medium'.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "scalePercentage":true
  });

  group.metrics.push({
    "key":"soft_hits_against",
    "display":"Soft %",
    "description":"Percentage of contact classified as 'Soft'.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "scalePercentage":true,
    "endGroup":true
  });


  return group;
}

/* jshint esversion:6 */
PitcherConfig.prototype.defineFangraphsValue = function() {
  const config = this;

  let group = {
    "heading":"Fangraphs",
    "description":"Total contribution data from Fangraphs",
    "metrics":[]
  };

  group.metrics.push({
    "key":"",
    "display":"",
    "description":"",
    "source":"",
    "isHeader":true,
    "headerType":"fewer-wins-more-wins",
    "startGroup":true
  });

  group.metrics.push({
    "key":"fWar",
    "display":"Fangraphs WAR",
    "description":"Fangraphs Wins Above Replacement. Measures total player contribution in terms of marginal team wins.",
    "source":"Fangraphs",
    "startGroup":true,
    "endGroup":true
  });

  group.metrics.push({
    "isSpacer":true
  });


  return group;
};

/* jshint esversion:6 */
PitcherConfig.prototype.definePitchDetails = function() {
  const config = this;
  let group;

  group = {
    "display":"Pitch Details",
    "description":"Measures of tendency and effectiveness by pitch type."
  };

  let subGroups = [
    config.definePitchFrequency(),
    config.definePitchVelocity()
  ];

  return subGroups;
}

/* jshint esversion:6 */
PitcherConfig.prototype.definePitchFrequency = function() {
  const config = this;

  let group = {
    "heading":"Pitch Frequency",
    "description":"Frequency by Pitch Type.",
    "metrics":[]
  };

  group.metrics.push({
    "isHeader":true,
    "headerType":"never-always",
    "startGroup":true
  });

  group.metrics.push({
    "key":"four_seam_frequency",
    "display":"Four-Seam",
    "description":"Frequency of Four-Seam Fastballs.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });

  group.metrics.push({
    "key":"cut_fastball_frequency",
    "display":"Cut Fastball",
    "description":"Frequency of Cut Fastballs.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });

  group.metrics.push({
    "key":"sinker_frequency",
    "display":"Sinker",
    "description":"Frequency of Sinkers.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  })

  group.metrics.push({
    "key":"splitter_frequency",
    "display":"Splitter",
    "description":"Frequency of Split-Finger Fastballs.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });


  group.metrics.push({
    "key":"slider_frequency",
    "display":"Slider",
    "description":"Frequency of Sliders.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });


  group.metrics.push({
    "key":"curveball_frequency",
    "display":"Curveball",
    "description":"Frequency of Curveballs.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });

  group.metrics.push({
    "key":"slider_frequency",
    "display":"Changeup",
    "description":"Frequency of Changeups.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });


  return group;
}

/* jshint esversion:6 */
PitcherConfig.prototype.definePitchVelocity = function() {
  const config = this;

  let group = {
    "heading":"Pitch Velocity",
    "description":"Velocity by Pitch Type.",
    "metrics":[]
  };

  group.metrics.push({
    "key":"four_seam_velocity",
    "display":"Four-Seam",
    "description":"Average Velocity of Four-Seam Fastballs.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });

  group.metrics.push({
    "key":"cut_fastball_velocity",
    "display":"Cut Fastball",
    "description":"Average Velocity of Cut Fastballs.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });

  group.metrics.push({
    "key":"sinker_velocity",
    "display":"Sinker Fastball",
    "description":"Average Velocity of Sinkers.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });


  group.metrics.push({
    "key":"splitter_velocity",
    "display":"Splitter",
    "description":"Average Velocity of Split-Finger Fastballs.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });


  group.metrics.push({
    "key":"slider_velocity",
    "display":"Slider",
    "description":"Average Velocity of Sliders.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });


  group.metrics.push({
    "key":"curveball_velocity",
    "display":"Curveball",
    "description":"Average Velocity of Curveballs.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });

  group.metrics.push({
    "key":"slider_velocity",
    "display":"Changeup",
    "description":"Average Velocity of Changeups.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });

  group.metrics.push({
    "key":"knuckleball_velocity",
    "display":"Knuckleball",
    "description":"Average Velocity of Cut Fastballs.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });


  return group;
}

/* jshint esversion:6 */
PitcherConfig.prototype.definePitcherControl = function() {
  const config = this;

  let group = {
    "heading":"Under Pitcher's Control",
    "description":"Measures of plate appearance outcomes that are entirely under the pitcher's control.",
    "metrics":[]
  };

  group.metrics.push({
    "key":"",
    "display":"",
    "description":"",
    "source":"",
    "isHeader":true,
    "headerType":"never-always",
    "startGroup":true
  });


  group.metrics.push({
    "key":"strikeout_rate",
    "display":"Strikeouts / 9",
    "description":"Strikeouts per nine innings.",
    "source":"Fangraphs",
    "shareScale":["walk_rate","home_run_rate"],
    "relatedToNext":true,
    "startGroup":true
  });

  group.metrics.push({
    "key":"walk_rate",
    "display":"Walks / 9",
    "description":"Walks issued per nine innings.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "endGroup":true
  });

  // group.metrics.push({
  //   "key":"strikeout_to_walk_ratio",
  //   "display":"Strikeouts : Walks",
  //   "description":"Strikeouts to walks issued ratio.",
  //   "source":"Fangraphs",
  //   "scalePercentage":true,
  //   "relatedToNext":true
  // });

  group.metrics.push({
    "isSpacer":true
  })

  group.metrics.push({
    "key":"",
    "display":"",
    "description":"",
    "source":"",
    "isHeader":true,
    "headerType":"never-always",
    "startGroup":true,
    "endGroup":true
  });


  group.metrics.push({
    "key":"home_run_rate",
    "display":"HR %",
    "description":"Home runs allowed per nine innings.",
    "source":"Fangraphs",
    "endGroup":true
  });

  // group.metrics.push({
  //   "key":"average_exit_velocity",
  //   "display":"Hit Velocity",
  //   "description":"Average velocity of batted balls against the pitcher.",
  //   "source":"Baseball Savant"
  // });


  // group.metrics.push({
  //   "key":"barrel_rate_against",
  //   "display":"Barrel %",
  //   "description":"Percentage of very hard hits per contact.",
  //   "source":"Baseball Savant"
  // });


  return group;
}

/* jshint esversion:6 */
PitcherConfig.prototype.definePitchingOutcomesOverview = function() {
  const config = this;

  let group = {
    "heading":"Pitching Outcomes Overview",
    "description":"Measures of the end results of plate appearances.",
    "metrics":[]
  };

  group.metrics.push({
    "key":"",
    "display":"",
    "description":"",
    "source":"",
    "isHeader":true,
    "headerType":"fewer-runs-more-runs",
    "startGroup":true
  });

  group.metrics.push({
    "key":"fielding_independent_pitching",
    "display":"FIP",
    "description":"Fielding Independent Pitching. Estimates pitcher ERA based on outcomes entirely under his control.",
    "source":"Fangraphs",
    "shareScale":["expected_fielding_independent_pitching"],
    "relatedToNext":true,
    "startGroup":true
  });

  group.metrics.push({
    "key":"expected_fielding_independent_pitching",
    "display":"xFIP",
    "description":"Expected Fielding Independent Pitching. Controls the above measure for luck.",
    "source":"Fangraphs",
    "shareScale":[],
    "endGroup":true
  });

  group.metrics.push({
    "key":"",
    "display":"",
    "description":"",
    "source":"",
    "isSpacer":true
  });

  // group.metrics.push({
  //   "key":"runs_allowed_per_nine_innings",
  //   "display":"RA/9",
  //   "description":"Total number of runs (earned and unearned) allowed by a pitcher per nine innings.",
  //   "source":"Fangraphs",
  //   "shareScale":[]
  // });



  return group;
}

/* jshint esversion:6 */
PitcherConfig.prototype.defineTeamResults = function() {
  const config = this;

  let group = {
    "heading":"Team Results",
    "description":"Measures of plate appearance outcomes that may be influenced by factors beyond the pitcher's control.",
    "metrics":[]
  };

  group.metrics.push({
    "isHeader":true,
    "headerType":"fewer-runs-more-runs",
    "startGroup":true
  });

  group.metrics.push({
    "key":"expected_weighted_on_base_average_against",
    "display":"xWOBA",
    "description":"Expected Weighted On-Base Average for hitters facing this pitcher.",
    "source":"Baseball Savant",
    "endGroup":true,
    "startGroup":true
  });

  group.metrics.push({
    "isSpacer":true
  });

  group.metrics.push({
    "isHeader":true,
    "startGroup":true,
    "headerType":"fewer-runs-more-runs",
  });

  group.metrics.push({
    "key":"expected_slugging_against",
    "display":"xSlugging",
    "description":"Expected slugging average for hitters facing this pitcher.",
    "source":"Baseball Savant",
    "endGroup":true,
    "startGroup":true
  });

  group.metrics.push({
    "isSpacer":true
  });



  group.metrics.push({
    "isHeader":true,
    "startGroup":true,
    "headerType":"fewer-hits-more-hits"
  });

  group.metrics.push({
    "key":"expected_batting_average_against",
    "display":"xBatting Average",
    "description":"Expected batting average of hitters facing this pitcher.",
    "source":"Baseball Savant",
    "endGroup":true,
    "startGroup":true
  });


  return group;
};

/* jshint esversion:6 */
PitcherConfig.prototype.defineTotalValue = function() {
  const config = this;
  let group;

  group = {
    "display":"Total Value",
    "description":"Measures of pitcher's overall contribution to team performance."
  };

  let subGroups = [
    config.defineFangraphsValue(),
    config.defineBBRefValue()
  ];

  return subGroups;
};

/* jshint esversion:6 */
Player.prototype.buildModeler = function() {
  const player = this;
  let compsArray = [];

  player.stats.metadata.similarPlayers.forEach((player) =>{
    let ageArray = [];
    ageArray = player.data.map((a) => { return {"age":a.age,"bWar":+a.bWAR,"fWar":+a.fWar}});

    compsArray.push({
      "name":player.name,
      "bWar":ageArray,
    });
  });


  let modeler = new Modeler({
    "where":"#modeler",
    "tooltip":tooltip,
    "name":player.stats.metadata.name,
    "player":player,
  })
  .registerTooltip(tooltip)
  .addPlayerData(player.stats,player.Name.replace("_"," "))
  .addCompData(compsArray)
  .addProjection(player.projection);

  return player;
}

/* jshint esversion:6 */
Player.prototype.buildTables = function() {
  const player = this;
  player.tables = new PlayerTable(player)
    .registerTooltip(player.tooltip);

  return player;
}

/* jshint esversion:6 */
Player.prototype.getConfig = function() {
  const player = this;

  if(player.isPitcher) {
    player.config = new PitcherConfig();
    d3.json("rawData/2018_all_pitching.json")
      .then((dataset) => {
        player.comparePlayers = dataset;
        player.checkIfReady();
      });
  } else {
    player.config = new HitterConfig();
    d3.json("yearlyData/2018_all_hitting.json")
      .then((dataset) => {
        player.comparePlayers = dataset;
        player.checkIfReady();
      });
  }

  return player.config;
}

/* jshint esversion:6 */
Player.prototype.getProjection = function() {
  const player = this;
  let projection;

  player.projection = new Projection(player.stats);

  return player;
};

/* jshint esversion:6 */
Player.prototype.getStats = function() {
  const player = this;

  let fileName = "combinedAgentData/" + player.Name.replace(" ","_") + ".json";


  player.checkIfReady();

  d3.json(fileName)
  .then((stats,err) => {
    player.stats = stats;
    player.checkIfReady();
  });


  return false;
};

/* jshint esversion:6 */
Player.prototype.metadata = function(options) {
  const player = this;

  player.Name = options.Name;
  player.Position = options.Position;
  if(player.Position == "SP" || player.Position == "RP") {
    player.isPitcher = true;
  } else {
    player.isPitcher = false;
  }


  return player;
}

/* jshint esversion:6 */
Player.prototype.checkIfReady = function() {
  const player = this;
  let toCheck = [player.stats,player.config,player.comparePlayers];
  let proceed = true;
  toCheck.forEach((check) => {
    if(check === undefined || check === false) {
      proceed = false;
    }
  });

  if(proceed) {
    d3.select("#loadingRegion")
      .style("display","none");

    d3.select("#modelerAndStats")
      .style("display","block");


    player.getProjection();
    player.buildModeler();
    player.buildTables();
  }

  return player;
};

/* jshint esversion:6 */
PlayerMenu.prototype.add2018PlayerBWar = function(where,player) {
  const menu = this;
  let element;

  let displayBWar;

  if(player.bWar2018 !== "") {
    displayBWar = parseFloat(player.bWar2018).toFixed(1);
  } else {
    displayBWar = "n/a";
  }

  where
    .append("div")
    .classed("player-menu-cell",true)
    .classed("player-menu-war",true)
    .classed("align-center",true)
    .html(displayBWar);

  return element;
};

/* jshint esversion:6 */
PlayerMenu.prototype.addCareerBWar = function(where,player) {
  const menu = this;

  let element;
  let careerTotal = 0;

  Object.keys(player).forEach((key) => {
    if(key.substr(0,4) === "bWar") {
      if(player[key] !== "") {
        careerTotal += parseFloat(player[key]);
      }
    }
  });

  careerTotal = careerTotal.toFixed(1);

  element = where
    .append("div")
    .classed("player-menu-cell",true)
    .classed("align-center",true)
    .html(careerTotal);

  return element;
};

/* jshint esversion:6 */
PlayerMenu.prototype.addContainerElement = function() {
  const menu = this;

  let element;

  element = d3.select("#_playerMenu")
    .append("div")
    .classed("player-menu-container",true)
    .style("display","table")
    .style("width","100%");

  return element;

};

/* jshint esversion:6 */
PlayerMenu.prototype.addFilterRow = function() {
  const menu = this;

  let blankRow = menu.containerElement
    .append("div")
    .classed("player-menu-header-row",true)
    .attr("id","filterNameRow")
    .style("height","50px");

  blankRow
    .append("div")
    .classed("player-menu-header-cell",true)
    .classed("align-left",true)
    .html("<input type='text' id='searchPlayers' length='30' placeholder='Filter By Name...'/>");

  blankRow
    .append("div")
    .classed("player-menu-header-cell",true);


  blankRow
    .append("div")
    .classed("player-menu-header-cell",true);

  blankRow
    .append("div")
    .classed("player-menu-header-cell",true);

  blankRow
    .append("div")
    .classed("player-menu-header-cell",true);

  blankRow
    .append("div")
    .classed("player-menu-header-cell",true);



  return blankRow;
};

/* jshint esversion:6 */
PlayerMenu.prototype.addHeaderRow = function() {
  const menu = this;

  let headerRow = menu.containerElement
    .append("div")
    .classed("player-menu-header-row",true);


  headerRow
    .append("div")
    .classed("player-menu-header-cell",true)
    .classed("align-left",true)
    .html("Player Name")
    .on('mouseover',function() {
      menu.tooltip
        .update("Player Name")
        .show()
        .move();
    })
    .on('mousemove',function() {
      menu.tooltip
        .move();
    })
    .on('mouseout',function() {
      menu.tooltip
        .hide();
    })
    .on('click',function() {
      menu
        .sort("Name");
    })
    .on('click',function() {
      menu.positionRow.style("display","none");
    });


  headerRow
    .append("div")
    .classed("player-menu-header-cell",true)
    .classed("align-center",true)
    .attr("id","positionHeader")
    .html("Position")
    .on('mouseover',function() {
      menu.tooltip
        .update("Player's primary position.")
        .show()
        .move();
    })
    .on('mousemove',function() {
      menu.tooltip
        .move();
    })
    .on('mouseout',function() {
      menu.tooltip
        .hide();
    });

  headerRow
    .append("div")
    .classed("player-menu-header-cell",true)
    .classed("align-center",true)
    .html("Age")
    .on('mouseover',function() {
      menu.tooltip
        .update("Player's age starting the 2019 season. <em>Click to sort table</em>.")
        .show()
        .move();
    })
    .on('mousemove',function() {
      menu.tooltip
        .move();
    })
    .on('mouseout',function() {
      menu.tooltip
        .hide();
    })
    .on("click",function() {
      menu
        .sort("Age");
    });


  headerRow
    .append("div")
    .classed("player-menu-header-cell",true)
    .html("Career bWAR Performance")
    .on('mouseover',function() {
      menu.tooltip
        .update("Player's production to date.")
        .show()
        .move();
    })
    .on('mousemove',function() {
      menu.tooltip
        .move();
    })
    .on('mouseout',function() {
      menu.tooltip
        .hide();
    });

  headerRow
    .append("div")
    .classed("player-menu-header-cell",true)
    .html("2018 bWar")
    .on('mouseover',function() {
      menu.tooltip
        .update("Player's production in 2018.")
        .show()
        .move();
    })
    .on('mousemove',function() {
      menu.tooltip
        .move();
    })
    .on('mouseout',function() {
      menu.tooltip
        .hide();
    })
    .on('click',function() {
      menu.sort("bWar2018")
    })


  headerRow
    .append("div")
    .classed("player-menu-header-cell",true)
    .html("2019-2021<br/>Zips")
    .on('mouseover',function() {
      menu.tooltip
        .update("Fangraph's projected value through the 2021 season. <em>Click to sort table.</em>")
        .show()
        .move();
    })
    .on('mousemove',function() {
      menu.tooltip
        .move();
    })
    .on('mouseout',function() {
      menu.tooltip
        .hide();
    })
    .on('click',function() {
      menu
        .sort("3yearZips");
    });







  return headerRow;
};

/* jshint esversion:6 */
PlayerMenu.prototype.addPlayerAge = function(where,player) {
  const menu = this;

  let element;

  where
    .append("div")
    .classed("player-menu-cell",true)
    .classed("player-menu-position",true)
    .classed("align-center",true)
    .html(player.Age);

  return element;

};

/* jshint esversion:6 */
PlayerMenu.prototype.addPlayerLine = function(player) {
  const menu = this;

  let playerRow = menu.addPlayerRow(menu.containerElement,player);
  let playerName = menu.addPlayerName(playerRow,player);
  let playerPosition = menu.addPlayerPosition(playerRow,player);
  let playerAge = menu.addPlayerAge(playerRow,player);
  let playerSparkline = menu.addPlayerSparkline(playerRow,player);
  let player2018bWar = menu.add2018PlayerBWar(playerRow,player);
  let projectedBWar = menu.addProjectedPlayerBWar(playerRow,player);
  
};

/* jshint esversion:6 */
PlayerMenu.prototype.addPlayerName = function(where,player) {
  const menu = this;

  let element;

  element = where
    .append("div")
    .classed("player-menu-cell",true)
    .classed("player-menu-name",true);

  element
    .append("a")
    .classed("player-name-link",true)
    .html(player.Name)
    .on('click',() => {
      menu.loadCallback(player);
    });

  return element;
};

/* jshint esversion:6 */
PlayerMenu.prototype.addPlayerPosition = function(where,player) {
  const menu = this;

  let element;

  element = where
    .append("div")
    .classed("player-menu-cell",true)
    .classed("player-menu-position",true)
    .classed("align-center",true)
    .html(player.Position);

  return element;

};

/* jshint esversion:6 */
PlayerMenu.prototype.addPlayerRow = function(where,player) {
  const menu = this;

  let element;

  element = where
    .append("div")
    .datum(player)
    .classed("player-menu-row",true)
    .classed("player-menu-row-visible",true)
    .classed("player-menu-row-hidden",false);

  return element;

};

/* jshint esversion:6 */
PlayerMenu.prototype.addPlayerSparkline = function(where,player) {
  let element,
  sparkline;

  element = where
    .append("div")
    .classed("player-menu-cell",true)
    .classed("player-menu-sparkline",true)
    .classed("align-center",true);

  sparkline = new Sparkline({
    "where":element,
    "data":[player.bWar2004,player.bWar2005,player.bWar2006,player.bWar2007,player.bWar2008,player.bWar2009,player.bWar2010,player.bWar2011,player.bWar2012,player.bWar2013,player.bWar2014,player.bWar2015,player.bWar2016,player.bWar2017,player.bWar2018]
  });

  return element;
};

/* jshint esversion:6 */
PlayerMenu.prototype.addProjectedPlayerBWar = function(where,player) {
  const menu = this;

  let element;

  element = where
    .append("div")
    .classed("player-menu-cell",true)
    .classed("player-menu-name",true)
    .classed("center-align",true)
    .html((d) => {
      let value = parseFloat(d["3yearZips"]).toFixed(1);
      return value;
    });


}

/* jshint esversion:6 */
PlayerMenu.prototype.defineFilters = function() {
  const menu = this;

  let filters = {};
  filters.name = "";
  filters.catcher = true;
  filters.firstBase = true;
  filters.secondBase = true;
  filters.shortstop = true;
  filters.thirdBase = true;
  filters.leftField = true;
  filters.centerField = true;
  filters.rightField = true;
  filters.starter = true;
  filters.reliever = true;

  return filters;
};

/* jshint esversion:6 */
PlayerMenu.prototype.defineNameFilter = function() {
  const menu = this;

  let element;
  let filterInput;

  element = d3.select("#searchPlayers");

  element
    .on('input',() => {
      let value = element.node().value;
      menu.filters.name = value.toLowerCase();
      menu
        .updateFilters();
    })
    .on('mouseover',() => {
      menu.tooltip
        .update("Type to search players.")
        .show()
        .move();
    })
    .on('mousemove',() => {
      menu.tooltip
        .move();
    })
    .on('mouseout',() => {
      menu.tooltip
        .hide();
    });

  return menu;
};

/* jshint esversion:6 */
PlayerMenu.prototype.definePositionFilters = function() {
  const menu = this;

  menu.currentFilterRow = null;

  d3.select("#playerPositionFilters")
    .style("display","none");

  d3.select("#pitcherFilters")
    .style("display","none");

  let allPlayersButton = d3.select("#allPlayersButton");
  let positionPlayersButton = d3.select("#allPositionPlayers");
  let allPitchersButton = d3.select("#allPitchers");
  let positionFilterRow = d3.select("#playerPositionFilters");
  let positionOption = d3.selectAll(".positionOption");
  let allPositionOption = d3.select("#allPositionOption");

  let allPositionsOption = d3.select("#allPositionOption");

  let allPositionsActive = false;

  allPlayersButton.on('click',function() {

    allPlayersButton
      .classed("playerFilterOptionActive",true);

    positionPlayersButton
      .classed("playerFilterOptionActive",false);

    allPitchersButton
      .classed("playerFilterOptionActive",false);

    Object.keys(menu.filters).forEach((key) => {
      if(key !== "name") {
        menu.filters[key] = true;
      }
    });

    menu
      .updateFilters();


    positionFilterRow
      .style("display","none");



  });

  positionPlayersButton.on('click',function() {

    allPlayersButton
      .classed("playerFilterOptionActive",false);

    positionPlayersButton
      .classed("playerFilterOptionActive",true);

    allPitchersButton
      .classed("playerFilterOptionActive",false);

    Object.keys(menu.filters).forEach((key) => {
      if(key !== "name") {
        menu.filters[key] = true;
      }
    });

    menu.filters.starter = false;
    menu.filters.reliever = false;

    menu
      .updateFilters();

    positionFilterRow
      .style("display","block");

    allPositionsActive = true;

  });

  allPitchersButton.on('click',function() {

    positionFilterRow
      .style("display","none");

    allPlayersButton
      .classed("playerFilterOptionActive",false);

    positionPlayersButton
      .classed("playerFilterOptionActive",false);

    allPitchersButton
      .classed("playerFilterOptionActive",true);

      Object.keys(menu.filters).forEach((key) => {
        if(key !== "name") {
          menu.filters[key] = false;
        }
      });

      menu.filters.starter = true;
      menu.filters.reliever = true;

      menu
        .updateFilters();

  });

  positionOption.each(function() {
    let element = d3.select(this);
    let key = element
      .attr("data-key");

    element
      .on('click',function() {

        if(key === "all") {

          element
            .attr("data-visible",true)
            .style("background-color","rgba(96,147,190,0.75)");

          Object.keys(menu.filters).forEach((key) => {
            if(key !== "name" && key !== "SP" & key !== "RP") {
              menu.filters[key] = true;
            }
          });

          d3.selectAll(".realPositionOption")
            .style("background-color","white")
            .attr("data-visible","false");

          allPositionsActive = true;


        } else {
          if(allPositionsActive) {
            allPositionOption
              .attr("data-visible","false")
              .style("background-color","white");

            Object.keys(menu.filters).forEach((key) => {
              if(key !== "name") {
                menu.filters[key] = false;
              }
            });
            allPositionsActive = false;

            allPositionOption
              .classed("playerFilterOptionActive",false);

          }

          if(element.attr("data-visible") == "true") {

            menu.filters[key] = false;
            element
              .style("background-color","white")
              .attr("data-visible","false");

          } else {

            menu.filters[key] = true;

            element
              .style("background-color","rgba(96,147,190,0.75)")
              .attr("data-visible","true");


          }

        }

        menu
          .updateFilters();
      });

  });

  d3.selectAll(".menu-position-filter")
    .on('input',function(d,i) {
      let element = d3.select(this);
      let position = element.attr("data-position");
      menu.filters[position] = element.node().checked;
      menu.updateFilters();
    });

  return menu;
};

/* jshint esversion:6 */
PlayerMenu.prototype.showTable = function(menu,players) {

  menu.containerElement = menu
    .addContainerElement();

  menu.headerRow = menu
    .addHeaderRow();

  menu.filterRow = menu
    .addFilterRow();

  players.forEach((player) => {
    menu.addPlayerLine(player);
  });

  menu.playerMenuRows = menu.containerElement
    .selectAll(".player-menu-row");

  menu
    .defineNameFilter()
    .definePositionFilters();

};

/* jshint esversion:6 */
PlayerMenu.prototype.filterByName = function(query) {
  const menu = this;

  menu.playerMenuRows
    .each(function(d,i) {
      let element = d3.select(this);
      if(d.Name.toLowerCase().indexOf(query.toLowerCase()) == -1) {

        element
          .classed("player-menu-row-visible",false)
          .classed("player-menu-row-hidden",true);
      } else {
        element
          .classed("player-menu-row-visible",true)
          .classed("player-menu-row-hidden",false);
      }
    });

  return menu;
};

/* jshint esversion:6 */
PlayerMenu.prototype.hidePositionRow = function() {
  const menu = this;

  // menu.positionRow
  //   .style("display","none");

}

/* jshint esversion:6 */
PlayerMenu.prototype.registerTooltip = function(tooltip) {
  const menu = this;

  menu.tooltip = tooltip;

  return menu;
};

/* jshint esversion:6 */
PlayerMenu.prototype.showPositionRow = function() {
  const menu = this;

  menu.positionRow
    .style("display","block");

}

/* jshint esversion:6 */
PlayerMenu.prototype.sort = function(key) {
  const menu = this;
  let select = d3.selectAll(".player-menu-row");

  if(key == menu.currentSort) {
    if(menu.currentOrder == "DESC" || menu.currentOrder == "") {
      select.sort((a,b) => { return a[key] - b[key]; });
      menu.currentSort = key;
      menu.currentOrder = "ASC";
    } else {
      select.sort((a,b) => { return b[key] - a[key]; });
      menu.currentOrder = "DESC";
    }
  } else {
    select.sort((a,b) => { return b[key] - a[key]; });
    menu.currentSort = key;
    menu.currentOrder = "";
  }


  return this;
};

/* jshint esversion:6 */
PlayerMenu.prototype.togglePosition = function(togglePosition) {
  const menu = this;

  menu.playerMenuRows
    .each(function(d,i) {
      let element = d3.select(this);
      let rowPosition = d.Position;
      let currentlyVisible = element.classed("player-menu-row-visible");


      if(rowPosition === togglePosition) {
        if(currentlyVisible) {
          element
            .classed("player-menu-row-visible",false)
            .classed("player-menu-row-hidden",true);
        } else {
          element
            .classed("player-menu-row-visible",true)
            .classed("player-menu-row-hidden",false);
        }
      }
    });

};

/* jshint esversion:6 */
PlayerMenu.prototype.updateFilters = function() {
  const menu = this;

  menu.playerMenuRows
    .each(function(d,i) {
      let element = d3.select(this);
      let visible = true;
      let name = d.Name.toLowerCase();
      let position = d.Position;

      let positionMap = {
        "1B":"firstBase",
        "2B":"secondBase",
        "3B":"thirdBase",
        "SS":"shortstop",
        "LF":"leftField",
        "CF":"centerField",
        "RF":"rightField",
        "C":"catcher",
        "SP":"starter",
        "RP":"reliever"
      };

      let positionKey = positionMap[position];
      if(!menu.filters[positionKey]) { visible = false; }
      if(name.indexOf(menu.filters.name) == -1 ) { visible = false; }

      if(!visible) {
        element
          .classed("player-menu-row-visible",false)
          .classed("player-menu-row-hidden",true);
      } else {
        element
          .classed("player-menu-row-visible",true)
          .classed("player-menu-row-hidden",false);
      }
    });

  return menu;
};

/* jshint esversion:6 */
PlayerTable.prototype.addContainer = function() {
  const table = this;

  let container = d3.select("#showStats")
    .append("div");

  return container;
}

/* jshint esversion:6 */
PlayerTable.prototype.addMetricNames = function() {
  const table = this;

  let metricNames = table.subSectionRows
    .append("div")
    .classed("stats-numberline-table-cell",true)
    .classed("right-align",true)
    .style("width","100px")
    .style("padding-right","10px")
    .style("height",(d) => {
      if(d.isSpacer) {
        return "25px"
      }
    })
    .html((d) => {

      if(d.isSpacer) {
        return "&nbsp;"
      }

      return d.display;
    })
    .on('mouseover',function(d) {
      if(!d.isHeader && !d.isSpacer) {
        let descriptionHtml = "<div class='tooltip-metric-description''>";
        descriptionHtml += "<div class='tooltip-metric-description-text'>" + d.description + "</div>";

        descriptionHtml += "<div class='tooltip-metric-source-header'>Source</div>"
        if(d.source === "Fangraphs") {
          descriptionHtml += "<div class='tooltip-metric-description-source'><img src='fangraphs.png' class='tooltip-metric-icon' /> Fangraphs </div>"
        }

        if(d.source == "Baseball Savant") {
          descriptionHtml += "<div class='tooltip-metric-description-source'><img src='savant.png' class='tooltip-metric-icon' /> Baseball Savant </div>"
        }

        if(d.source == "Baseball-Reference") {
          descriptionHtml += "<div class='tooltip-metric-description-source'><img src='bbref.png' class='tooltip-metric-icon' /> Baseball-Reference.com </div>"
        }


        descriptionHtml += "</div>";
        table.player.tooltip
          .update(descriptionHtml)
          .show()
          .move();
      }
    })
    .on('mousemove',() => { table.player.tooltip.move(); })
    .on('mouseout',() => { table.player.tooltip.hide(); });


  return metricNames;
}

/* jshint esversion:6 */
PlayerTable.prototype.addMetricNumberlineCells = function () {
  const table = this;

  let numberlineCells = table.subSectionRows
    .append("div")
    .classed("stats-numberline-table-cell",true)
    .classed("numberline",true)
    .style("width","500px")
    .attr("data-key",(d) => { return d.key; })
    .html("");

  numberlineCells.each(function(d,i) {
    let element = d3.select(this);

    if(!d.isHeader) {
      if(!table.player.comparePlayers.stats.hasOwnProperty(d.key)) {
      } else {
        let numberline;

        numberline = new Numberline({
            "where":element,
            "name":d.display,
            "key":d.key,
            "playerMap":table.player.comparePlayers.stats.playerMap
          })
          .addData(table.player.comparePlayers.stats[d.key])
          .registerTooltip(table.player.tooltip)
          .addHighlightValue(table.player.stats.stats['2018'][d.key],table.player);

          table.numberlines[d.key] = {
            "datum":d,
            "numberline":numberline
          };



      }
    } else {
      let reference = new NumberlineReference({
        "where":element,
        "type":d.headerType,
        "name":table.player.Name
      });
    }
  });

  return numberlineCells;
}

/* jshint esversion:6 */
PlayerTable.prototype.addPlayerMetricSparkline = function() {
  const table = this;

  let sparklines = table.subSectionRows
    .append("div")
    .classed("stats-numberline-table-cell",true)
    .classed("center-align",true)
    .style("margin","auto")
    .style("font-weight","normal")
    .style("font-size","8pt")
    .html(function(d) {
      if(d.isHeader) {
        return "Career Performance";
      }
    });

  sparklines
    .each(function(datum,index) {
      let element = d3.select(this);

      if(!datum.isHeader && !datum.isSpacer) {
        let statsArray = [];
        Object.keys(table.player.stats.stats).forEach((year) => {
          if(table.player.stats.stats[year][datum.key] !== undefined) {
            statsArray.push(table.player.stats.stats[year][datum.key]);
          }
        });

        let yDomain = d3.extent(statsArray);
        let sparkline = new Sparkline({
          "where":element,
          "data":statsArray,
          "yDomain":yDomain
        })
        .registerTooltip(tooltip);
      }
    });


  return sparklines;
}

/* jshint esversion:6 */
PlayerTable.prototype.addPlayerMetricValueCells = function() {
  const table = this;

  let playerValueCells = table.subSectionRows
    .append("div")
    .classed("stats-numberline-table-cell",true)
    .classed("right-align",true)
    .html((d) => {
      if(!table.player.stats.stats['2018'].hasOwnProperty(d.key)) {
      } else {
        if(table.player.stats.stats['2018'][d.key] === null) {
          return "n/a";
        }
        return table.player.stats.stats['2018'][d.key].toFixed(2);
      }
    });


  return playerValueCells;
}

/* jshint esversion:6 */
PlayerTable.prototype.addSectionHeadings = function() {
  const table = this;

  let headings = table.sections
    .append("h1")
    .html((d) => { return d.name; });

  return headings;
};

/* jshint esversion:6 */
PlayerTable.prototype.addSections = function() {
  const table = this;

  let sections = table.container
    .selectAll(".stat-group-numberline")
    .data(table.player.config.tables)
    .enter()
    .append("div")
    .classed("stat-group-numberline",true);

  return sections;
}

/* jshint esversion:6 */
PlayerTable.prototype.addSubSectionHeaderRows = function() {
  const table = this;

  let headerRows = table.subSectionTables
    .append("div")
    .classed("stats-numberline-table-row",true);

  headerRows
    .append("div")
    .classed("stats-numberline-header-cell",true)
    .classed("right-align",true)
    .html();

  headerRows
    .append("div")
    .classed("stats-numberline-header-cell",true)
    .html((d) => { return d.headingType });

  headerRows
    .append("div")
    .classed("stats-numberline-header-cell",true)
    .html(table.player.Name);

  headerRows
    .append("div")
    .classed("stats-numberline-header-cell",true)
    .html("Career History");


  return headerRows;
}

/* jshint esversion:6 */
PlayerTable.prototype.addSubSectionHeadings = function() {
  const table = this;

  let headings = table.subSections
    .append("div")
    .classed("stats-subsection-header",true);

  return headings;
}

/* jshint esversion:6 */
PlayerTable.prototype.addSubSectionRows = function() {
  const table = this;

  let rows = table.subSectionTables
    .selectAll(".stats-numberline-table-row")
    .data((d) => { return d.metrics})
    .enter()
    .append("div")
    .classed("stats-numberline-table-row",true)
    .classed("stats-number-line-header-row",(d) => { return d.isHeader })
    .classed("stats-numberline-start-group",(d) => { return d.startGroup})
    .classed("stats-number-line-related-to-next",(d) => { return d.relatedToNext })
    .classed("stats-number-line-related-to-previous",(d) => { return d.relatedToPrevious })
    .classed("stats-number-line-end-group",(d) => { return d.endGroup });

  return rows;
}

/* jshint esversion:6 */
PlayerTable.prototype.addSubSectionTables = function() {
  const table = this;

  let tables = table.subSections
    .append("div")
    .classed("stats-numberline-table",true)
    .html((d) => { return d.name; });

  return tables;
}

/* jshint esversion: 6 */
PlayerTable.prototype.addSubSections = function() {
  const table = this;

  let subSections = table.sections
    .selectAll(".stats-numberline-subsection")
    .data((d) => { return d.tables})
    .enter()
    .append("div")
    .classed("stats-numberline-subsection",true);

  return subSections;
}

/* jshint esversion:6 */
Projection.prototype.getBWarAgingCurveProjection = function() {
  const projection = this;

  let warProjection = [];
  let lastValue;

  lastValue = projection.threeYearBWar;

  warProjection.push({
    "age":projection.data.stats["2018"].age,
    "bWar":projection.data.stats["2018"].bWar
  });

  projection.relevantWarCurveDeltas.forEach((curveDeltaObject) => {
    let season = {};
    season.age = curveDeltaObject.age;
    season.bWar = +(lastValue + curveDeltaObject.delta).toFixed(1);
    lastValue += curveDeltaObject.delta;
    warProjection.push(season);
  });

  return warProjection;
};

/* jshint esversion:6 */
Projection.prototype.getBWarSimilarPlayersMax = function() {
  const projection = this;
  let maxValues = [];

  Object.keys(projection.bWarSimilarPlayersRawData).forEach((key,index) => {
      let season = {};
      season.age = key;
      season.bWar = d3.max(projection.bWarSimilarPlayersRawData[key]);
      maxValues.push(season);
  });

  maxValues.shift();

  maxValues.unshift({
    "age":projection.data.stats["2018"].age,
    "bWar":projection.data.stats["2018"].bWar
  });

  return maxValues;
};

/* jshint esversion:6 */
Projection.prototype.getBWarSimilarPlayersMean = function() {
  const projection = this;
  let meanValues = [];

  Object.keys(projection.bWarSimilarPlayersRawData).forEach((key,index) => {
    let season = {};
    season.age = key;
    season.bWar = d3.mean(projection.bWarSimilarPlayersRawData[key]);
    meanValues.push(season);
  });

  meanValues.shift();
  meanValues.unshift({
    "age":projection.data.stats["2018"].age,
    "bWar":projection.data.stats["2018"].bWar
  });

  return meanValues;
};

/* jshint esversion:6 */
Projection.prototype.getBWarSimilarPlayersMin = function() {
  const projection = this;
  let minValues = [];

  Object.keys(projection.bWarSimilarPlayersRawData).forEach((key,index) => {
    let season = {};
    season.age = key;
    season.bWar = d3.min(projection.bWarSimilarPlayersRawData[key]);
    minValues.push(season);
  });

  minValues.shift();

  minValues.unshift({
    "age":projection.data.stats["2018"].age,
    "bWar":projection.data.stats["2018"].bWar
  });

  return minValues;
};

/* jshint esversion:6 */
Projection.prototype.getBWarSimilarPlayersRawData = function() {
  const projection = this;

  let playerProjection = [];
  let similarPlayers = projection.data.metadata.similarPlayers;
  let rawValues = {};
  let mean;
  let top25;
  let bottom25;
  let agesToProject;

  agesToProject = projection.bWarAgingCurveProjection.map((a) => {return a.age;});

  agesToProject.forEach((age) => {
    rawValues[age] = [];
  });

  similarPlayers.forEach((player) => {
    agesToProject.forEach((age) => {
      let findMatch = player.data.filter((a) => { return a.age == age});
      if(findMatch[0]) {
        rawValues[age].push(+findMatch[0].bWAR);
      } else {
        let lastSeason = d3.max(player.data.map((a) => { return a.year}));
        if(lastSeason != "2018") {
          rawValues[age].push(0);
        }
      }
    });
  });


  return rawValues;
};

/* jshint esversion:6 */
Projection.prototype.getBaseAge = function() {
  const projection = this;

  let baseAge = projection.data.stats["2018"].age;

  return baseAge;
};

/* jshint esversion:6 */
Projection.prototype.getBaseBWar = function() {
  const projection = this;
  let baseBWar = projection.data[Object.keys(projection.data)[Object.keys(projection.data).length - 1]].bWar;
  return baseBWar;
};

/* jshint esversion:6 */
Projection.prototype.getFWarAgingCurveProjection = function() {
  const projection = this;

  let warProjection = [];
  let lastValue;

  lastValue = projection.threeYearFWar;

  warProjection.push({
    "age":projection.data.stats["2018"].age,
    "fWar":projection.data.stats["2018"].fWar
  });

  projection.relevantWarCurveDeltas.forEach((curveDeltaObject) => {
    let season = {};
    season.age = curveDeltaObject.age;
    season.fWar = +(lastValue + curveDeltaObject.delta).toFixed(1);
    lastValue += curveDeltaObject.delta;
    warProjection.push(season);
  });

  return warProjection;
};

/* jshint esversion:6 */
Projection.prototype.getFWarSimilarPlayersMax = function() {
  const projection = this;
  let maxValues = [];

  Object.keys(projection.fWarSimilarPlayersRawData).forEach((key,index) => {
      let season = {};
      season.age = key;
      season.fWar = d3.max(projection.fWarSimilarPlayersRawData[key]);
      maxValues.push(season);
  });

  maxValues.shift();

  maxValues.unshift({
    "age":projection.data.stats["2018"].age,
    "fWar":projection.data.stats["2018"].fWar
  });

  return maxValues;
};

/* jshint esversion:6 */
Projection.prototype.getFWarSimilarPlayersMean = function() {
  const projection = this;
  let meanValues = [];

  Object.keys(projection.fWarSimilarPlayersRawData).forEach((key,index) => {
    let season = {};
    season.age = key;
    season.fWar = d3.mean(projection.fWarSimilarPlayersRawData[key]);
    meanValues.push(season);
  });

  meanValues.shift();
  meanValues.unshift({
    "age":projection.data.stats["2018"].age,
    "fWar":projection.data.stats["2018"].fWar
  });

  return meanValues;
};

/* jshint esversion:6 */
Projection.prototype.getFWarSimilarPlayersMin = function() {
  const projection = this;
  let minValues = [];

  Object.keys(projection.bWarSimilarPlayersRawData).forEach((key,index) => {
    let season = {};
    season.age = key;
    season.fWar = d3.min(projection.fWarSimilarPlayersRawData[key]);
    minValues.push(season);
  });

  minValues.shift();

  minValues.unshift({
    "age":projection.data.stats["2018"].age,
    "fWar":projection.data.stats["2018"].fWar
  });

  return minValues;
};

/* jshint esversion:6 */
Projection.prototype.getFWarSimilarPlayersRawData = function() {
  const projection = this;

  let playerProjection = [];
  let similarPlayers = projection.data.metadata.similarPlayers;
  let rawValues = {};
  let mean;
  let top25;
  let bottom25;
  let agesToProject;

  agesToProject = projection.fWarAgingCurveProjection.map((a) => {return a.age;});

  agesToProject.forEach((age) => {
    rawValues[age] = [];
  });

  similarPlayers.forEach((player) => {
    agesToProject.forEach((age) => {
      let findMatch = player.data.filter((a) => { return a.age == age});
      if(findMatch[0]) {
        rawValues[age].push(+findMatch[0].fWar);
      } else {
        let lastSeason = d3.max(player.data.map((a) => { return a.year}));
        if(lastSeason != "2018") {
          rawValues[age].push(0);
        }
      }
    });
  });
  return rawValues;
};

/* jshint esversion:6 */
Projection.prototype.getRelevantWarCurveDeltas = function() {
  const projection = this;
  let deltas;

  deltas = projection.warCurveDeltas.filter((object) => { return +object.age > projection.baseAge; });

  return deltas;
};

/* jshint esversion:6 */
Projection.prototype.getThreeYearBWar = function() {
  const projection = this;

  let relevantYears,
    rollingAverage;

  relevantYears = [
    projection.data.stats["2016"].bWar,
    projection.data.stats["2017"].bWar,
    projection.data.stats["2018"].bWar
  ];

  rollingAverage = relevantYears.reduce((a,b) => { return a+b; })/3;

  return rollingAverage;

};

/* jshint esversion:6 */
Projection.prototype.getThreeYearFWar = function() {
  const projection = this;

  let relevantYears,
    rollingAverage;

  relevantYears = [
    projection.data.stats["2016"].fWar,
    projection.data.stats["2017"].fWar,
    projection.data.stats["2018"].fWar
  ];

  rollingAverage = relevantYears.reduce((a,b) => { return a+b; })/3;

  return rollingAverage;

};

/* jshint esversion:6 */
PlayerTable.prototype.registerTooltip = function(tooltip) {
  const table = this;

  table.tooltip = tooltip;

  return table;
}

/* jshint esversion:6 */
Projection.prototype.defineWarCurveDeltas = function() {
  const projection = this;

  return [
    {"age":"19","delta":0.33},
    {"age":"20","delta":0.33},
    {"age":"21","delta":0.33},
    {"age":"22","delta":0.21},
    {"age":"23","delta":0.19},
    {"age":"24","delta":0.06},
    {"age":"25","delta":0},
    {"age":"26","delta":-0.10},
    {"age":"27","delta":-0.06},
    {"age":"28","delta":-0.13},
    {"age":"29","delta":-0.13},
    {"age":"30","delta":-0.23},
    {"age":"31","delta":-0.21},
    {"age":"32","delta":-0.25},
    {"age":"33","delta":-0.27},
    {"age":"34","delta":-0.25},
    {"age":"35","delta":-0.29},
    {"age":"36","delta":-0.29},
    {"age":"37","delta":-0.25},
    {"age":"38","delta":-0.33},
    {"age":"39","delta":-0.33},
    {"age":"40","delta":-0.33}
  ];

};

/* jshint esversion:6 */
Slider.prototype.addGlowCircle = function() {
  const slider = this;

  // TODO: FILL IN VALUES
  // UPDATE STYLES
  let glowCircle = slider.layers.glow
    .append("circle")
    .attr("cx",slider.scale(slider.currentValue))
    .attr("cy",slider.referencePoints.circleCenterY)
    .attr("opacity",slider.styles.glowCircleDefaultOpacity)
    .attr("r",slider.styles.glowCircleDefaultRadius)
    .attr("fill",slider.styles.glowCircleFill)
    .attr("display","none");

  return glowCircle;
};

/* jshint esversion:6 */
Slider.prototype.addGroup = function(where) {
  const slider = this;
  let group;

  group = where
    .append("g");

  return group;
}

/* jshint esversion:6 */
Slider.prototype.addLabel = function() {
  const slider = this;
  let text;

  text = new TextLabel({
    "text":slider.labelText,
    "where":slider.layers.text,
    "text-anchor":"middle"
  }).show()
  .move(slider.referencePoints.labelPosition);

  return text;
};

/* jshint esversion:6 */
Slider.prototype.addLayers = function() {
  const slider = this;
  let layers = {};

  layers.background = addSingleLayer();
  layers.text = addSingleLayer();
  layers.track = addSingleLayer();
  layers.glow = addSingleLayer();
  layers.circle = addSingleLayer();

  return layers;

  function addSingleLayer() {
    let layer;

    layer = slider.group
      .append("g");

    return layer;
  }
};

/* jshint esversion:6 */
Slider.prototype.addSliderTrack = function() {
  const slider = this;
  let track;

  track = slider.layers.track
    .append("rect")
    .attr("x",slider.margins.left)
    .attr("y",slider.referencePoints.sliderTrackVerticalCenter)
    .attr("height",slider.styles.sliderTrackHeight)
    .attr("width",slider.referencePoints.effectiveWidth)
    .attr("fill",slider.styles.sliderTrackColor);

  return track;
};

/* jshint esversion:6 */
Slider.prototype.addSlidingCircle = function() {
  const slider = this;

  let circle = slider.layers.circle
    .append("circle")
    .attr("cx",slider.scale(slider.currentValue))
    .attr("cy",slider.referencePoints.circleCenterY)
    .attr("r",slider.styles.circleRadius)
    .attr("fill",slider.styles.circleFill)
    .attr("stroke",slider.styles.circleStroke)
    .attr("stroke-width",slider.styles.circleStrokeWidth)
    .attr("cursor","pointer")
    .call(d3.drag().on("start",slider.dragFunctions.start).on("drag",slider.dragFunctions.drag).on("end",slider.dragFunctions.end))
    .on('mouseover',function() {
      let element = d3.select(this);

      element
        .transition()
        .duration(125)
        .attr("fill",slider.styles.highlightFillColor)
        .attr("stroke",slider.styles.highlightStrokeColor)
        .attr("stroke-width",slider.styles.highlightFillStrokeWidth)
        .attr("radius",slider.styles.highlightCircleRadius);

      slider
        .circleMouseover();
    })
    .on('mouseout',function() {
      let element = d3.select(this);

      if(!slider.dragLock) {
        element
          .transition()
          .duration(125)
          .attr("fill",slider.styles.circleFill)
          .attr("stroke",slider.styles.circleStroke)
          .attr("stroke-width",slider.styles.circleStrokeWidth)
          .attr("radius",slider.styles.circleRadius);
      }

      slider
        .circleMouseout();


    });

  return circle;
};

/* jshint esversion:6 */
Slider.prototype.addValueLabel = function() {
  const slider = this;
  let text;

  text = new TextLabel({
    "text":slider.datum.value,
    "where":slider.layers.text,
    "textAnchor":"start",
    "fontSize":"16px"
  }).show()
  .move({
    "x":slider.referencePoints.valueLabelCenterX,
    "y":slider.referencePoints.circleCenterY
  });

  return text;
};

/* jshint esversion:6 */
Slider.prototype.defaulter = function(value,defaultValue) {
    return value === undefined ? defaultValue : value;
};

/* jshint esversion:6 */
Slider.prototype.defineDragFunctions = function() {
  const slider = this;

  let dragFunctions = {};

  dragFunctions.start = function(d,i) {
    let element = d3.select(this);
    slider.dragLock = true;
  };

  dragFunctions.drag = function(d,i) {
    let element = d3.select(this);
    let xPosition = d3.event.x;

    if(xPosition >= slider.referencePoints.trackMin && xPosition <= slider.referencePoints.trackMax) {
      let newValue;
      newValue = slider.scale.invert(xPosition);

      slider.currentValue = newValue;

      slider.valueLabel
        .updateText(newValue.toFixed(slider.significantDigits));

      slider.dragCallback(newValue);

      element
        .attr("cx",xPosition);
    }
  };


  dragFunctions.end = function(d,i) {
    slider.dragLock = false;

    let element = d3.select(this);

    element
      .transition()
      .duration(125)
      .attr("fill",slider.styles.circleFill)
      .attr("stroke",slider.styles.circleStroke)
      .attr("stroke-width",slider.styles.circleStrokeWidth)
      .attr("radius",slider.styles.circleRadius);

  };

  return dragFunctions;
};

/* jshint esversion:6 */
Slider.prototype.defineLayout = function() {
  const slider = this;
  let layout = {};

  layout.labelOrigin = {"x":0,"y":slider.margins.top};
  layout.sliderOrigin = {"x":slider.margins.left,"y":slider.margins.top};

  return layout;
};

/* jshint esversion:6 */
Slider.prototype.defineMargins = function(presetMargins) {
  const slider = this;
  let margins = slider.defaulter(presetMargins,{});

  margins.left = slider.defaulter(margins.left,10);
  margins.right = slider.defaulter(margins.right,50);
  margins.top = slider.defaulter(margins.top,10);
  margins.bottom = slider.defaulter(margins.bottom,0);

  return margins;
};

/* jshint esversion:6 */
Slider.prototype.defineReferencePoints = function(isLeft) {
  const slider = this;
  let referencePoints = {};

  referencePoints.verticalCenter = slider.size.height / 2;
  referencePoints.effectiveWidth = slider.size.width - slider.margins.left - slider.margins.right;
  referencePoints.effectiveHeight = slider.size.height - slider.margins.top - slider.margins.bottom;
  referencePoints.sliderTrackVerticalCenter = slider.margins.top + (referencePoints.effectiveHeight / 2);
  referencePoints.trackMin = slider.margins.left;
  referencePoints.trackMax = slider.size.width - slider.margins.right;
  referencePoints.circleCenterY = referencePoints.sliderTrackVerticalCenter + slider.styles.sliderTrackHeight / 2;
  referencePoints.valueLabelCenterX = referencePoints.effectiveWidth + 15;

  if(isLeft) {
    referencePoints.labelPosition = {"x":-10,"y":referencePoints.circleCenterY};
  } else {
    referencePoints.labelPosition = {"x":slider.size.width / 2,"y":slider.margins.top};
  }

  return referencePoints;
};

/* jshint esversion:6 */
Slider.prototype.defineScale = function() {
  const slider = this;
  let scale;

  scale = d3.scaleLinear()
    .domain(slider.domain)
    .range([slider.referencePoints.trackMin,slider.referencePoints.trackMax]);

  return scale;
};

/* jshint esversion:6 */
Slider.prototype.defineSize = function(presetSize) {
  const slider = this;
  let size = slider.defaulter(presetSize,{});

  size.height = slider.defaulter(size.height,50);
  size.width = slider.defaulter(size.width,200);

  return size;
};

/* jshint esversion:6 */
Slider.prototype.defineStyles = function(presetStyles) {
  const slider = this;
  let styles = slider.defaulter(presetStyles,{});

  styles.sliderTrackColor = "#aaa";
  styles.sliderTrackHeight = 5;
  styles.circleRadius = 5;
  styles.circleFill = "black";
  styles.circleStroke = "#eee";
  styles.circleStrokeWidth = 1;

  styles.highlightFillColor = "#ed553b";
  styles.highlightStrokeColor = "black";
  styles.highlightFillStrokeWidth = 2;
  styles.highlightCircleRadius = 7;

  styles.glowCircleDefaultOpacity = 1.0;
  styles.glowCircleDefaultRadius = 7;
  styles.glowCircleFill = "#ed553b";

  styles.glowCircleDefaultOpacity = 1;
  styles.glowCircleDefaultRadius = 5;
  styles.glowCircleFill = "#ed553b";

  styles.glowDelay = 0;
  styles.glowDuration = 1500;
  styles.glowCircleEndOpacity = 0;
  styles.glowCircleEndRadius = 15;
  styles.glowCircleEndFill = "#ed553b";


  return styles;
};

/* jshint esversion:6 */
Slider.prototype.hide = function() {
  const slider = this;

  slider.group
    .attr("display","none");

  return slider;
};

/* jshint esversion:6 */
Slider.prototype.killGlow = function() {
  const slider = this;

  slider.isGlowing = false;
  
  slider.glowCircle
    .attr("display","none");

  return slider;
}

/* jshint esversion:6 */
Slider.prototype.move = function(coordinates) {
  const slider = this;

  slider.group
    .attr("transform","translate("+coordinates.x+","+coordinates.y+")");

  return slider;
}

/* jshint esversion:6 */
Slider.prototype.runGlow = function() {
  const slider = this;

  slider.isGlowing = true;

  slider.glowCircle
    .attr("display","block");

  glow();

  return slider;

  function glow() {
    slider.glowCircle
      .attr("opacity",slider.styles.glowCircleDefaultOpacity)
      .attr("r",slider.styles.glowCircleDefaultRadius)
      .attr("fill",slider.styles.glowCircleFill)
      .transition()
      .delay(slider.styles.glowDelay)
      .duration(slider.styles.glowDuration)
      .attr("opacity",slider.styles.glowCircleEndOpacity)
      .attr("r",slider.styles.glowCircleEndRadius)
      .attr("fill",slider.styles.glowCircleEndFill)
      .on('end',function()  {
        if(slider.isGlowing) {
          glow();
        }
      });

  }
};

/* jshint esversion:6 */
Slider.prototype.setDragCallback = function(cb) {
  const slider = this;

  slider.dragCallback = cb;

  return slider;
};

/* jshint esversion:6 */
Slider.prototype.show = function() {
  const slider = this;

  slider.group
    .attr("display","block");

  return slider;
};

/* jshint esversion:6 */
Slider.prototype.update = function(newValue) {
  const slider = this;

  slider.currentValue = newValue;
  slider.circle
    .attr("cx",slider.scale(newValue));

  return slider;
}

/* jshint esversion:6 */
Sparkline.prototype.addCircles = function() {
  const spark = this;

  let circles;

  let sparkData = [];

  [spark.data][0].forEach((datum,index) => {
    if(datum !== "") {
      sparkData.push({"index":index,"datum":datum});
    }
  });


  circles = spark.svg
    .selectAll("circle")
    .data(sparkData)
    .enter()
    .append("circle")
    .attr("cx",(d) => { return spark.scales.x(d.index); })
    .attr("cy",(d) => { return spark.scales.y(+d.datum); })
    .attr("r",spark.styles.circleRadius)
    .attr("fill",spark.styles.circleFill);

  return circles;
};

/* jshint esversion:6 */
Sparkline.prototype.addLine = function() {
  const spark = this;

  let sparkData = [];

  [spark.data][0].forEach((datum,index) => {
    if(datum !== "") {
      sparkData.push({"index":index,"datum":datum});
    }
  });

  let area = spark.svg
    .append("path")
    .datum(sparkData)
    .attr("stroke",spark.styles.lineStroke)
    .attr("stroke-width",spark.styles.lineStrokeWidth)
    .attr("fill",spark.styles.areaFill)
    .attr("d",spark.areaGenerator);


  return area;
};

/* jshint esversion:6 */
Sparkline.prototype.addSvg = function(where) {
  const spark = this;

  let svg = where
    .append("svg")
    .attr("height",spark.size.height)
    .attr("width",spark.size.width);

  return svg;
};

/* jshint esversion:6 */
Sparkline.prototype.addZeroLine = function() {
  const spark = this;

  let line;
  line = spark.svg
    .append("line")
    .attr("x1",spark.referencePoints.xMin)
    .attr("x2",spark.referencePoints.xMax)
    .attr("y1",spark.scales.y(0))
    .attr("y2",spark.scales.y(0))
    .attr("stroke",spark.styles.zeroLineStroke)
    .attr("stroke-width",spark.styles.zeroLineStrokWidth);

  return line;
};

/* jshint esversion:6 */
Sparkline.prototype.defaulter = function(value,defaultValue) {
  return value === undefined ? defaultValue : value;
};

/* jshint esversion:6 */
Sparkline.prototype.defineAreaGenerator = function() {
  const spark = this;

  let generator = d3.area()
    .x((d) => { return spark.scales.x(d.index); })
    .y0((d) => { return spark.scales.y(0); })
    .y1((d) => { return spark.scales.y(d.datum); });

  return generator;
};

/* jshint esversion:6 */
Sparkline.prototype.defineMargins = function(preset) {
  const spark = this;

  let margins = spark.defaulter(preset,{});
  margins.left = spark.defaulter(margins.left,5);
  margins.right = spark.defaulter(margins.right,5);
  margins.top = spark.defaulter(margins.top,5);
  margins.bottom = spark.defaulter(margins.bottom,5);
  
  return margins;
};

/* jshint esversion:6 */
Sparkline.prototype.defineReferencePoints = function() {
  const spark = this;

  let referencePoints = {};
  referencePoints.xMin = spark.margins.left;
  referencePoints.xMax = spark.size.width - spark.margins.right;
  referencePoints.yMin = spark.size.height - spark.margins.bottom;
  referencePoints.yMax = spark.margins.top;

  return referencePoints;
};

/* jshint esversion:6 */
Sparkline.prototype.defineScales = function() {
  const spark = this;

  let scales = {};

  scales.x = d3.scaleLinear()
    .domain([0,spark.data.length -1])
    .range([spark.referencePoints.xMin,spark.referencePoints.xMax]);

  scales.y = d3.scaleLinear()
    .domain(spark.yDomain)
    .range([spark.referencePoints.yMin,spark.referencePoints.yMax]);

  return scales;
};

/* jshint esversion:6 */
Sparkline.prototype.defineSize = function(preset) {
  const spark = this;

  let size = spark.defaulter(preset,{});
  size.height = spark.defaulter(size.height,25);
  size.width = spark.defaulter(size.width,150);

  return size;
};

/* jshint esversion:6 */
Sparkline.prototype.defineStyles = function(preset) {
  const spark = this;

  styles = spark.defaulter(preset,{});
  styles.zeroLineStroke = spark.defaulter(styles.zeroLineStroke,"#aaa");
  styles.zeroLineStrokWidth = spark.defaulter(styles.zeroLineStrokWidth,1);
  styles.circleFill = spark.defaulter(styles.circleFill,"#173f5f");
  styles.circleRadius = spark.defaulter(styles.circleRadius,1);

  styles.lineStroke = spark.defaulter(styles.lineStroke,"#173f5f");
  styles.lineStrokeWidth = spark.defaulter(styles.lineStrokeWidth,1);
  styles.areaFill = spark.defaulter(styles.areaFill,"rgba(32, 99, 155,0.5)");

  return styles;
};

/* jshint esversion:6 */
Sparkline.prototype.registerTooltip = function(tooltip) {
  const line = this;

  line.tooltip = tooltip;

  return line;
};

/* jshint esversion:6 */
StatsSection.prototype.addDiv = function(where) {
  const section = this;
  let div;

  div = d3.select(where)
    .append("div")
    .classed("stat-group-numberline",true);

  return div;
};

/* jshint esversion:6 */
StatsSection.prototype.addHeader = function(name) {
  const section = this;
  let header;

  header = section.div
    .append("div")
    .classed("stats-section-header",true)
    .html(name);

  return header;
};

/* jshint esversion:6 */
StatsSection.prototype.addTables = function(options) {
  const section = this;

  let allTables = [];

  if(!options.tables) {return allTables;}

  options.tables.forEach((tableOptions) => {
    tableOptions.where = section.div;
    let table = new StatsTable(tableOptions);
    allTables.push(table);
  });

  return allTables;
};

/* jshint esversion:6 */
StatsTable.prototype.addContainer = function(where) {
  const table = this;

  let container;

  container = where
    .append("div")
    .classed("stats-numberline-subsection",true);

  return container;
};

/* jshint esversion:6 */
StatsTable.prototype.addHeader = function(name) {
  const table = this;
  
  let header;

  header = table.container
    .append("div")
    .classed("stats-subsection-header",true)
    .html(name);

  return header;
};

/* jshint esversion:6 */
StatsTable.prototype.addTableElement = function(where) {
  const table = this;

  let tableElement;

  tableElement = where
      .append("div")
      .classed("stats-numberline-table",true);

  return tableElement;
};

/* jshint esversion:6 */
StatsTable.prototype.addTableHeaderRow = function(options) {
  const table = this;

  let row;

  row = table.tableElement
    .append("div")
    .classed("stats-numberline-table-row",true);

  row
    .append("div")
    .classed("stats-numberline-table-cell",true)
    .classed("stats-numberline-header-cell",true)
    .classed("align-right",true)
    .html("Metric");

  let referenceContainer = row
    .append("div")
    .classed("stats-numberline-table-cell",true)
    .classed("stats-numberline-header-cell",true);

  let reference = new NumberlineReference({
    "where":referenceContainer,
    "type":options.headerType
  });

  row
    .append("div")
    .classed("stats-numberline-table-cell",true)
    .classed("stats-numberline-header-cell",true)
    .classed("align-left",true)
    .classed("display-player-name",true);

  return row;
};

/* jshint esversion:6 */
StatsTable.prototype.generateRowElements = function(rows) {
  const table = this;
  let header;

  if(table.rows) {
    table.rows.forEach((row) => {
      row.where = table.tableElement;
      let tRow = new StatsTableRow(row);
    });
  }

  return header;
};

/* jshint esversion:6 */
StatsTableRow.prototype.addNameCell = function(where) {
  const tableRow = this;
  let element;

  element = where
    .append("div")
    .classed("stats-numberline-table-cell",true)
    .classed("right-align",true)
    .classed("stats-numberline-stat-name",true)
    .attr("data-description",tableRow.options.description)
    .html(tableRow.options.display);

  return element;  
};

/* jshint esversion:6 */
StatsTableRow.prototype.addNumberline = function(where) {
  const tableRow = this;
  let element;

  element = where
    .append("div")
    .classed("stats-numberline-table-cell",true);

  let numberlineElement = element
    .append("div")
    .classed("numberline",true)
    .attr("data-key",tableRow.options.key)
    .attr("data-name",tableRow.options.display)
    .attr("id","line_" + tableRow.options.key);

  if(tableRow.options.scaleMin !== null) {
    numberlineElement
      .attr("data-scale-min",tableRow.options.scaleMin);
  }

  if(tableRow.options.scaleMax) {
    numberlineElement
      .attr("data-scale-max",tableRow.options.scaleMax);
  }

  return element;
};

/* jshint esversion:6 */
StatsTableRow.prototype.addPlayerValue = function(where) {
  const tableRow = this;
  
  let element;

  element = where
    .append("div")
    .classed("stats-numberline-table-cell",true)
    .classed("left-align",true);


  element
    .append("span")
    .classed("stats-numberline-table-player-value",true)
    .attr("data-key",tableRow.options.key);

  return element;
};

/* jshint esversion:6 */
StatsTableRow.prototype.addRowElement = function(where) {
  const tableRow = this;
  let element;

  element = where
    .append("div")
    .classed("stats-numberline-table-row",true);

  return element;
};

/* jshint esversion:6 */
StatsTableRow.prototype.addSparkline = function(where) {
  const row = this;
  let element;

  element = where
    .append("div")
    .classed("stats-numberline-table-row",true)
    .classed("stats-numberline-table-row-sparkline",true)
    .attr("data-key",row.options.key);


  return element;
};

/* jshint esversion:6 */
TextLabel.prototype.addBackground = function() {
  const label = this;

  let text;

  text = label.group
    .append("text")
    .attr("x",0)
    .attr("y",0)
    .attr("text-anchor",label.styles.textAnchor)
    .attr("dominant-baseline","central")
    .attr("font-family",label.styles.fontFamily)
    .attr("font-size",label.styles.fontSize)
    .attr("font-weight",label.styles.fontWeight)
    .attr("stroke",label.styles.backgroundStroke)
    .attr("fill","none")
    .attr("stroke-width",label.styles.outlineWidth)
    .text(label.text);

  return text;
};

/* jshint esversion:6 */
TextLabel.prototype.addForeground = function() {
  const label = this;

  let text;

  text = label.group
    .append("text")
    .attr("x",0)
    .attr("y",0)
    .attr("text-anchor",label.styles.textAnchor)
    .attr("dominant-baseline","central")
    .attr("font-family",label.styles.fontFamily)
    .attr("font-size",label.styles.fontSize)
    .attr("font-weight",label.styles.fontWeight)
    .attr("stroke","none")
    .attr("fill",label.styles.foregroundColor)
    .text(label.text);

  return text;
};

/* jshint esversion:6 */
TextLabel.prototype.addGroup = function(where) {
  const label = this;
  let group;

  group = where
    .append("g")
    .style("display","none")
    .attr("cursor","pointer");

  return group;
};

/* jshint esversion:6 */
TextLabel.prototype.defineStyles = function(options) {
  const label = this;
  let styles;

  styles = defaulter(options.styles,{});

  styles.fontFamily = defaulter(options.fontFamily,"Source Sans Pro");
  styles.fontSize = defaulter(options.fontSize,"10pt");
  styles.fontWeight = defaulter(options.fontWeight,"bold");
  styles.backgroundStroke = defaulter(options.backgroundStroke,"white");
  styles.outlineWidth = defaulter(options.outlineWidth,5);
  styles.foregroundColor = defaulter(options.foregroundColor,"black");
  styles.textAnchor = defaulter(options.textAnchor,"middle");

  return styles;

  function defaulter(value,defaultValue) {
    return value === undefined ? defaultValue : value;
  }
};

/* jshint esversion:6 */
TextLabel.prototype.hide = function() {
  const label = this;

  label.group
    .style("display","none");

  return label;
};

/* jshint esversion:6 */
TextLabel.prototype.move = function(position) {
  const label = this;

  label.group
    .attr("transform","translate("+position.x+","+position.y+")");

  return this;
};

/* jshint esversion:6 */
TextLabel.prototype.show = function() {
  const label = this;

  label.group
    .style("display","block");

  return label;
};

/* jshint esversion:6 */
TextLabel.prototype.updateText = function(newText) {
  const label = this;

  label.background.text(newText);
  label.foreground.text(newText);

  return label;
};

/* jshint esversion:6 */
Tooltip.prototype.createDiv = function(where) {
  const tooltip = this;
  let div;

  div = d3.select(where)
    .append("div")
    .classed("tooltip",true)
    .html("tooltip");

  return div;
};

/* jshint esversion:6 */
Tooltip.prototype.hide = function() {
  const tooltip = this;

  tooltip.div
    .style("display","none");

  return tooltip;
};

/* jshint esversion:6 */
Tooltip.prototype.move = function(event,offset) {
  const tooltip = this;

  event = d3.event;

  if(offset === undefined) {
    offset = {};
  }
  offset.x = offset.x ? offset.x : 10;
  offset.y = offset.y ? offset.y : 0;

  let height = tooltip.div.node().clientHeight;

  let xPosition = event.pageX + offset.x;
  let yPosition = event.pageY + offset.y - height / 2;

  tooltip.div
    .style("left",xPosition + "px")
    .style("top",yPosition + "px");

  return tooltip;
};

/* jshint esversion:6 */
Tooltip.prototype.registerPlayerMap = function(playerMap) {
  const tooltip = this;
  tooltip.playerMap = playerMap;
  return tooltip;
};

/* jshint esversion:6 */
Tooltip.prototype.show = function() {
  const tooltip = this;

  tooltip.div
    .style("display","block");

  return tooltip;
};

/* jshint esversion:6 */
Tooltip.prototype.showCompPlayerName = function(compPlayer) {
  const tooltip = this;

  tooltip
    .update(compPlayer)
    .show()
    .move();

  return this;
};

/* jshint esversion:6 */
Tooltip.prototype.showNumberlineDatum = function(datum) {
  const tooltip = this;
  let chartName = datum.chartName;
  let playerName = datum.name;
  let playerValue = datum.value;
  let summaryData = datum.summaryData;
  let zScore = (playerValue - summaryData.mean) / summaryData.standardDeviation;
  let zScoreStatement;
  let zScoreClass;

  if(zScore <= - 2) {
    zScoreStatement = "Significantly below the mean.";
    zScoreClass = "significantlyBelowMean";
  }
  if(zScore > -2 && zScore < -1) {
    zScoreStatement = "Well below the mean.";
    zScoreClass = "wellBelowMean";
  }
  if(zScore >= -1 && zScore < 0) {
    zScoreStatement = "Below the mean.";
    zScoreClass = "belowMean";
  }
  if(zScore >= 0 && zScore < 1) {
    zScoreStatement = "Above the mean.";
    zScoreClass = "aboveMean";
  }
  if(zScore >= 1 && zScore < 2) {
    zScoreStatement = "Well above the mean.";
    zScoreClass = "wellAboveMean";
  }
  if(zScore >= 2) {
    zScoreStatement = "Significantly above the mean.";
    zScoreClass = "significantlyAboveMean";
  }

  let display = "<div class='tooltipNumberlinePlayerName'>" + playerName + "</div>";
  display += "<div class='tooltipNumberLineValueLine'><span class='tooltipNumberlineStatName'>" + datum.chartName + "</span>: <span class='tooltipNumberlineStatValue'>" + datum.value + "</span> | <span class='tooltipNumberlineStatName'>Z-Score:</span> <span class='tooltipNumberlineStatValue'> "+zScore.toFixed(2)+" </span></div>";
  display += "<div class='tooltipNumberLineValueLine'><span class='tooltipNumberlineZScoreStatement  "+ zScoreClass +"'>" + zScoreStatement + "</span></div>";

  tooltip
    .update(display)
    .show()
    .move(d3.event);


  return tooltip;

};

/* jshint esversion:6 */
Tooltip.prototype.showNumberlineMean = function(summaryData,name) {
  const tooltip = this;

  let display = "";

  display = "The mean value for <span class='tooltipStatName'> " + name + "</span> was <span class='tooltipStatMean'>" + summaryData.mean.toFixed(2) + "</span>. Standard Deviation = " + summaryData.standardDeviation.toFixed(2);

  tooltip
    .update(display)
    .show()
    .move(d3.event);

  return tooltip;
};

/* jshint esversion:6 */
Tooltip.prototype.showOneStandardDeviation = function(summaryData,name) {
  const tooltip = this;

  let display;

  display = "The one standard deviation interval for <span class='tooltipStatName'>" + name + "</span> was [<span class='tooltipDeviationInterval'>"+ summaryData.oneBelowStandardDeviation.toFixed(2)+"</span> , <span class='tooltipDeviationInterval'>"+summaryData.oneAboveStandardDeviation.toFixed(2)+"</span>].";

  tooltip
    .update(display)
    .show()
    .move(d3.event);

  return tooltip;
};

/* jshint esversion:6 */
Tooltip.prototype.showPlayerProjection = function(playerName,projection) {
  const tooltip = this;

  let display = "The mean comp player for <strong>" + playerName + "</strong> was worth ";
  display += projection.bWar.toFixed(1) + " wins above replacement in their age ";
  display += projection.age + " season.";

  tooltip
    .update(display)
    .show()
    .move();

  return tooltip;
};

/* jshint esversion:6 */
Tooltip.prototype.showPlayerYear = function(name,datum) {
  let tooltip = this;


  let display = name + " was worth <strong>" + datum.bWar.toFixed(1) + "</strong> wins above replacement in his age " + datum.age + " season.";

  tooltip
    .update(display)
    .show()
    .move();

  return tooltip;
};

/* jshint esversion:6 */
Tooltip.prototype.showSparklinedata = function(data) {
  const tooltip = this;

  return tooltip;
};

/* jshint esversion:6 */
Tooltip.prototype.showStatDefinition = function(description) {
  const tooltip = this;

  tooltip
    .update(description)
    .show()
    .move(d3.event,{x:25});

  return tooltip;
};

/* jshint esversion:6 */
Tooltip.prototype.showTwoStandardDeviations = function(summaryData,name) {
  const tooltip = this;

  let display;

  display = "The two standard deviation interval for <span class='tooltipStatName'>" + name + "</span> was [<span class='tooltipDeviationInterval'>"+ summaryData.twoBelowStandardDeviation.toFixed(2)+"</span> , <span class='tooltipDeviationInterval'>"+summaryData.twoAboveStandardDeviation.toFixed(2)+"</span>].";

  tooltip
    .update(display)
    .show()
    .move(d3.event);

  return tooltip;
};

/* jshint esversion:6 */Tooltip.prototype.update = function(display) {
  const tooltip = this;

  tooltip.div
    .html(display);

  return tooltip;
};

/* jshint esversion:6 */
WinChart.prototype.addAxes = function() {
  const chart = this;

  let axes = {};

  let xAxis = d3.axisBottom(chart.scales.x).ticks(2).tickFormat((d) => { return "$" + d + "MM"});

  axes.x = chart.layers.axes
  .append("g")
  .attr("transform","translate(0,"+(10 + chart.referencePoints.yMax)+")")
  .call(xAxis)
  .attr("opacity",1)
  .attr("font-family",chart.styles.axisFontFamily)
  .attr("font-size",chart.styles.axisFontSize);

  let yAxis = d3.axisLeft(chart.scales.y).ticks(2).tickFormat((d) => { return d;});
  axes.y = chart.layers.axes
    .append("g")
    .attr("transform","translate("+chart.referencePoints.xMin+",0)")
    .call(yAxis)
    .attr("opacity",1)
    .attr("font-family",chart.styles.axisFontFamily)
    .attr("font-size",chart.styles.axisFontSize);


  return axes;
}

/* jshint esversion:6 */
WinChart.prototype.addCircles = function() {
  const chart = this;

  let groups = chart.layers.circles
    .selectAll("g")
    .data(chart.data)
    .enter()
    .append("g")
    .attr("cursor","pointer")
    .attr("transform",function(datum,index) {
      return "translate("+chart.scales.x(datum)+","+chart.scales.y(index + 2019)+")"
    })
    .on('mouseover',chart.groupMouseover())
    .on('mouseout',chart.groupMouseout())
    .call(d3.drag()
      .on('start',chart.groupDragStart())
      .on('drag',chart.groupDrag())
      .on('end',chart.groupDragEnd())
    )

  let highlights = groups
    .append("circle")
    .classed("circle-highlight",true)
    .attr("r",chart.styles.circleRadius)
    .attr("fill",chart.styles.highlightCircleFill)
    .attr("opacity",chart.styles.highlightCircleOpacity);


  let circles = groups
    .append("circle")
    .classed("circle-visible",true)
    .attr("r",chart.styles.circleRadius)
    .attr("fill",chart.styles.circleFill)
    .attr("stroke",chart.styles.circleStroke)
    .attr("stroke-width",chart.styles.circleStrokeWidth)

  let text = groups
    .append("text")
    .attr("x",10)
    .attr("y",0)
    .attr("dominant-baseline","middle")
    .attr("text-anchor","start")
    .attr("font-family",chart.styles.labelFontFamily)
    .attr("font-size",chart.styles.labelFontSize)
    .attr("fill",chart.styles.labelFontFill)
    .attr("opacity",chart.styles.labelFontOpacity)
    .text((d) => { return "$" + d.toFixed(2) + "MM";})


  return groups;
}

/* jshint esversion:6 */
WinChart.prototype.addGroup = function(where) {
  const chart = this;

  let group = where
    .append("g");

  return group;
}

/* jshint esversion:6 */
WinChart.prototype.addLayers = function() {
  const chart = this;

  let layers = {};

  layers.axes = chart.addSingleGroup();
  layers.line = chart.addSingleGroup();
  layers.circles = chart.addSingleGroup();

  return layers;
}

/* jshint esversion:6 */
WinChart.prototype.addLine = function() {
  const chart = this;

  let line = chart.layers.line
    .append("path")
    .attr("fill","none")
    .attr("stroke",chart.styles.lineStroke)
    .attr("stroke-width",chart.styles.lineStrokeWidth);

  return line;
}

/* jshint esversion:6 */
WinChart.prototype.addSingleGroup = function() {
  const chart = this;

  let group = chart.group
    .append("g");

  return group;
}

/* jshint esversion:6 */
WinChart.prototype.addYearHighlight = function() {
  const chart = this;

  let highlightGroup = chart.layers.circles
    .append("g")
    .attr("opacity",0)
    .attr("display","none")
    .attr("transform","translate("+chart.referencePoints.xMin+","+chart.referencePoints.yMin+")")

  highlightGroup
    .append("text")
    .attr("x",-6)
    .attr("y",0)
    .attr("text-anchor","middle")
    .attr("dominant-baseline","middle")
    .attr("font-size","10pt")
    .attr("text-anchor","end")
    .attr("stroke",chart.styles.highlightYearStroke)
    .attr("stroke-width",chart.styles.highlightYearStrokeWidth)
    .text("2019");

  highlightGroup
    .append("text")
    .attr("x",-6)
    .attr("y",0)
    .attr("text-anchor","middle")
    .attr("dominant-baseline","middle")
    .attr("font-size","10pt")
    .attr("text-anchor","end")
    .attr("fill",chart.styles.highlightYearFill)
    .text("2019");

  return highlightGroup;
}

/* jshint esversion:6 */
WinChart.prototype.createLineGenerator = function() {
  const chart = this;

  let generator = d3.line()
      .x((d) => { return chart.scales.x(d);})
      .y((d,i) => { return chart.scales.y(i + 2019);});


  return generator;
}

/* jshint esversion:6 */
WinChart.prototype.defineLineData = function(years) {
  const chart = this;
  let data = [];

  chart.data.forEach((datum,index) => {
    if(index < years) {
      data.push(datum);
    }
  });

  chart.line
    .datum(data)
    .attr("d",chart.lineGenerator);

  return data;
}

/* jshint esversion:6 */
WinChart.prototype.defineMargins = function(options) {
  const chart = this;

  let margins = defaulter(options.margins,{});
  margins.left = defaulter(margins.left,30);
  margins.right = defaulter(margins.right,10);
  margins.top = defaulter(margins.top,10);
  margins.bottom = defaulter(margins.bottom,30);

  return margins;

  function defaulter(setValue,defaultValue) {
    return setValue === undefined ? defaultValue : setValue;
  }
}

/* jshint esversion:6 */
WinChart.prototype.defineReferencePoints = function() {
  const chart = this;

  let referencePoints = {};

  referencePoints.xMin = chart.margins.left;
  referencePoints.xMax = chart.size.width - chart.margins.right;
  referencePoints.yMin = chart.margins.top;
  referencePoints.yMax = chart.size.height - chart.margins.bottom;

  referencePoints.effectiveWidth = referencePoints.xMax - referencePoints.xMin;
  referencePoints.effectiveHeight = referencePoints.yMax - referencePoints.yMin;

  return referencePoints;
}

/* jshint esversion:6 */
WinChart.prototype.defineScales = function() {
  const chart = this;

  let scales = {};

  scales.x = d3.scaleLinear()
    .domain(chart.domain)
    .range([chart.referencePoints.xMin,chart.referencePoints.xMax]);

  scales.y = d3.scaleLinear()
    .domain([2019,2034])
    .range([chart.referencePoints.yMin,chart.referencePoints.yMax]);

  return scales;
}

/* jshint esversion:6 */
WinChart.prototype.defineSize = function(options) {
  const chart = this;

  let size = defaulter(options.size,{})

  size.width = defaulter(size.width,200);
  size.height = defaulter(size.height,200);

  return size;

  function defaulter(setValue,defaultValue) {
    return setValue === undefined ? defaultValue : setValue;
  }
}

/* jshint esversion:6 */
WinChart.prototype.defineStyles = function() {
  const chart = this;
  let styles = {};

  styles.axisFontFamily = "Source Sans Pro";
  styles.axisFontSize = "8pt";

  styles.lineStroke = "#555";
  styles.lineStrokeWidth = 3;

  styles.circleRadius = 3;
  styles.circleFill = "white";
  styles.circleStroke = "#aaa";
  styles.circleStrokeWidth = 1;

  styles.highlightCircleRadius = 10;
  styles.highlightCircleFill = "#ed553b"
  styles.highlightCircleOpacity = 0.25;
  styles.highlightDragOpacity = 1;

  styles.labelFontFamily = "Source Sans Pro";
  styles.labelFontSize = "8pt"
  styles.labelFontFill = "black"
  styles.labelFontOpacity = 1;
  styles.labelHighlightFontSize = "10pt";
  styles.labelHighlightOpacity = 1;


  styles.highlightYearStroke = "white";
  styles.highlightYearStrokeWidth = 2;
  styles.highlightYearFill = "black";



  return styles;
}

/* jshint esversion:6 */
WinChart.prototype.groupDrag = function() {
  const chart = this;

  return function(datum,index) {
    let element = d3.select(this);
    let yPosition = chart.scales.y(index + 2019);
    let xPosition = d3.event.x;
    let xValue = chart.scales.x.invert(xPosition);

    if(xValue <= chart.domain[0]) {
      xValue = chart.domain[0];
      xPosition = chart.referencePoints.xMin;
    }

    if(xValue >= chart.domain[1]) {
      xValue = chart.domain[1];
      xPosition = chart.referencePoints.xMax;
    }

    element
      .attr("transform","translate("+xPosition+","+yPosition+")");

    element.select("text")
      .text("$" + xValue.toFixed(2) + "MM");

    chart.data[index] = xValue;

    chart
      .defineLineData(chart.currentYears);

    chart
      .updateAAVFromYears();

    chart
      .changeCallback();


  }
};

/* jshint esversion:6 */
WinChart.prototype.groupDragEnd = function() {
  const chart = this;

  return function(datum,index) {
    let element = d3.select(this);

    chart.dragLock = false;

    element
      .select(".circle-highlight")
      .attr("opacity",chart.styles.highlightCircleOpacity);

  }
}

/* jshint esversion:6 */
WinChart.prototype.groupDragStart = function() {
  const chart = this;

  return function(datum,index) {
    let element = d3.select(this);

    chart.dragLock = true;

    element
      .select(".circle-highlight")
      .attr("opacity",chart.styles.highlightDragOpacity);
  }
};

/* jshint esversion: 6 */
WinChart.prototype.groupMouseout = function() {
  const chart = this;

  return function(d,i) {
    let element = d3.select(this);

    if(!chart.dragLock) {
      element
        .select(".circle-highlight")
        .transition()
        .duration(150)
        .attr("r",chart.styles.circleRadius);

      element
        .select("text")
        .transition()
        .duration(150)
        .attr("font-size",chart.styles.labelFontSize)
        .attr("opacity",chart.styles.labelFontOpacity);

      chart.axes.y
        .transition()
        .duration(150)
        .attr("opacity",1);

      chart.yearHighlight
        .transition()
        .duration(150)
        .attr("opacity",0)
        .on('end',function() {
          chart.yearHighlight
            .attr("display","none");
        });



    }

  };
};

/* jshint esversion:6 */
WinChart.prototype.groupMouseover = function() {
  const chart = this;

  return function(datum,index) {
    let element = d3.select(this);

    if(!chart.dragLock) {
      element
        .select(".circle-highlight")
        .transition()
        .duration(150)
        .attr("r",chart.styles.highlightCircleRadius);

      element
        .select("text")
        .transition()
        .duration(150)
        .attr("font-size",chart.styles.labelHighlightFontSize)
        .attr("opacity",chart.styles.labelHighlightOpacity);

      chart.axes.y
        .transition()
        .duration(150)
        .attr("opacity",0.25);

      chart.yearHighlight
        .attr("transform","translate("+chart.referencePoints.xMin+","+chart.scales.y(index + 2019)+")");

      chart.yearHighlight
        .selectAll("text")
        .text(index + 2019);

      chart.yearHighlight
        .attr("display","block")
        .transition()
        .duration(150)
        .attr("opacity",1);

    }
  };

};

/* jshint esversion:6 */
WinChart.prototype.aavSetValues = function(aav) {
  const chart = this;

  let isIdentical = chart.data.every((value,index,array) => value === array[0]);

  if(isIdentical) {
    chart.data.forEach((datum,index) =>{
      chart.data[index] = aav;
    });
  } else {
    let currentTotal = 0;
    let newTotal = aav * chart.currentYears;
    let difference = 0;
    let annualDifference;

    chart.data.forEach((datum,index) => {
      if(index < chart.currentYears) {
        currentTotal += datum;
      }
    });

    difference = newTotal - currentTotal;
    annualDifference = difference / chart.currentYears;

    chart.data.forEach((datum,index) => {
      if(index < chart.currentYears) {
        chart.data[index] += annualDifference;
      } else {
        chart.data[index] = aav;
      }
    });

  }

  chart.circles
    .attr("transform",(d,i) => { return "translate("+chart.scales.x(chart.data[i])+","+chart.scales.y(2019 + i)+")"});

  chart.circles.each(function(d,i) {
    let element = d3.select(this);
    let text = element.select("text");
    let value = chart.data[i];

    text
      .text((d,i) => { return "$" + value.toFixed(2) + "MM"; });
  });

  let totalValue = 0;
  chart.data.forEach((datum,index) => {
    if(index < chart.currentYears) {
      totalValue += datum;
    }
  });

  chart.totalValueDisplay
    .text("$" + totalValue.toFixed(2) + "MM");
    
  chart
    .defineLineData(chart.currentYears);

  chart
    .changeCallback();
}

/* jshint esversion:6 */
WinChart.prototype.addAAVSlider = function() {
  const chart = this;

  chart.aavSlider = new ModelSlider({
    "where":chart.layers.circles,
    "domain":chart.domain,
    "coordinates":{
      "x":chart.referencePoints.xMin,
      "y":chart.referencePoints.yMin - 20
    },
    "size":{
      "width":chart.referencePoints.effectiveWidth
    },
    "margins":{
      "left":0,
      "right":0
    },
    "formatter":(v) =>  { return "$" + v.toFixed(2) + "MM"},
    "callbacks":{
      "change":(value) => {
        chart
          .aavSetValues(value);
      }
    },
    "labelText":"Average Annual Value"
  }).updateValue(10);

  chart.totalValueLabel = chart.group
    .append("text")
    .attr("x",chart.referencePoints.xMin)
    .attr("y",chart.size.height + 15)
    .attr("font-family","Source Sans Pro")
    .attr("font-size","10pt")
    .attr("dominant-baseline","baseline")
    .text("Total Contract Cost:");

  chart.totalValueDisplay = chart.group
    .append("text")
    .attr("x",chart.referencePoints.xMin)
    .attr("y",chart.size.height + 17)
    .attr("font-family","Source Sans Pro")
    .attr("font-size","14pt")
    .attr("font-weight","bold")
    .attr("dominant-baseline","hanging")
    .text("");


  return chart;
}

/* jshint esversion:6 */
WinChart.prototype.updateAAVFromYears = function() {
  const chart = this;

  if(chart.aavSlider !== undefined) {
    let totalValue = 0;
    chart.data.forEach((datum,index) => {
      if(index < chart.currentYears) {
        totalValue += datum;
      }
    });

    let averageValue = totalValue / chart.currentYears;

    chart.aavSlider
      .updateValue(averageValue);

    chart.totalValueDisplay
      .text("$" + totalValue.toFixed(2) + "MM");

  }

  return chart;
}

/* jshint esversion:6 */
WinChart.prototype.updateYears = function(years) {
  const chart = this;

  chart.currentYears = years;

  chart.scales.y
    .domain([2019,2018 + (+years)]);

  let yAxis = d3.axisLeft(chart.scales.y).tickValues(chart.scales.y.domain()).tickFormat((d) => { return d;});

  chart.axes.y
    .call(yAxis);

  chart.circles
    .attr("transform",(d,i) => { return "translate("+chart.scales.x(chart.data[i])+","+chart.scales.y(2019 + i)+")" ;})
    .attr("display",function(datum,index) {
      if(index +1 <= years) { return "block"; }
      return "none";
    });

  chart
    .defineLineData(years);

  chart
    .updateAAVFromYears();

  return chart;
}
