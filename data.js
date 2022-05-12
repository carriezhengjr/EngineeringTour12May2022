var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.23807566338442854,
        "pitch": -0.030194707595963877,
        "fov": 1.4999900701183433
      },
      "linkHotspots": [
        {
          "yaw": 0.02044560287002639,
          "pitch": -0.29903206410593697,
          "rotation": 0.7853981633974483,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2092364599905423,
          "pitch": -0.060426946521582536,
          "title": "Welcome!",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">The Faculty of Engineering</span>"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.1934215957633576,
        "pitch": -0.029459706778098393,
        "fov": 1.4999900701183433
      },
      "linkHotspots": [
        {
          "yaw": 0.060023497347957644,
          "pitch": -0.020131405711451222,
          "rotation": 0.7853981633974483,
          "target": "2-engineering-auditorium-atrium"
        },
        {
          "yaw": -2.3243091636069035,
          "pitch": -0.010750988165124653,
          "rotation": 0,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3238439845906633,
          "pitch": 0.03159368361057169,
          "title": "A sculpture",
          "text": "of something"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.5673401466844865,
        "pitch": -0.11004215594506839,
        "fov": 1.4999900701183433
      },
      "linkHotspots": [
        {
          "yaw": -2.880662190188655,
          "pitch": -0.0013232300032886002,
          "rotation": 4.71238898038469,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4994801193803298,
          "pitch": 0.03781786222059935,
          "title": "Yummy coffee",
          "text": "Try out their cookies too!"
        }
      ]
    }
  ],
  "name": "Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
