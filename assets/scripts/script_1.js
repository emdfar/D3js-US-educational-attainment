<script>
var pie = new d3pie("pieChart", {
	"header": {
		"title": {
			"text": "Educational Attainment in the United States",
			"fontSize": 32
		},
		"subtitle": {
			"text": "Nation-Wide Education Level of Population in Schooling terror in people?",
			"color": "#644848",
			"font": "helvetica"
		},
		"titleSubtitlePadding": 4
	},
	"footer": {
		"text": "* This was curious. We're not sure why several people regard Winnipeg as a Top 15 Fear.",
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-right"
	},
	"size": {
		"canvasHeight": 489,
		"canvasWidth": 611,
		"pieInnerRadius": "69%",
		"pieOuterRadius": "84%"
	},
	"data": {
		"content": [
			{
				"label": "Nursery",
				"value": 0.06,
				"color": "#00047c"
			},
			{
				"label": "Kindergarten",
				"value": 0.05,
				"color": "#2f52aa"
			},
			{
				"label": "Elementary: 1-4",
				"value": 0.2,
				"color": "#738def"
			},
			{
				"label": "Elementary: 5-8",
				"value": 0.2,
				"color": "#779fdd"
			},
			{
				"label": "High School: 9-12",
				"value": 0.21,
				"color": "#bccef2"
			},
			{
				"label": "Undergraduate",
				"value": 0.23,
				"color": "#d7e5f7"
			},
			{
				"label": "Graduate",
				"value": 0.05,
				"color": "#000000"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "label-percentage1",
			"pieDistance": 20
		},
		"inner": {
			"format": "none"
		},
		"mainLabel": {
			"fontSize": 11
		},
		"percentage": {
			"color": "#999999",
			"fontSize": 11,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#cccc43",
			"fontSize": 11
		},
		"lines": {
			"enabled": true,
			"color": "#777777"
		},
		"truncation": {
			"enabled": true
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "linear",
			"speed": 420,
			"size": 8
		}
	},
	"misc": {
		"colors": {
			"segmentStroke": "#000000"
		},
		"canvasPadding": {
			"top": 12,
			"left": 5
		}
	}
});
</script>
