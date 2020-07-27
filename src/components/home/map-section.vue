<template>
    <section class="mapSection infoSection">
        <b-container fluid>
            <b-row>
                <b-col>
          			<h2 class="col-12 infoSection__title h1">{{ $t('map.activity') }}</h2>
					<div ref="mapWrap" class="mapWrap" > <!--@wheel="zoom" @touchstart="touchHandler" @touchmove="touchMove" @touchend="touchEnd" -->
						<img ref="mapImg" src="@/assets/img/map_about.jpg" draggable="false" alt="map">

						<div class="mapWrap__rotate" @click="onRotateMessageClick" v-if="isRotateMessageShowing">
							<div class="icon">
								<img src="@/assets/icons/rotate.svg"> 
							</div>
							<h6>Пожалуйста, переверните устройство для увеличения масштаба карты</h6>
						</div>
					</div>
	            </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
import Mapbox from 'mapbox-gl-vue';
import popupContent from './popup-content';
import MarkerIcon from '../../assets/icons/marker_big.png';
import MarkerHover from '../../assets/icons/marker_big_hover.png';
import { dragscroll } from 'vue-dragscroll'

export default {
	name: 'mapSection',
	directives: {
		'dragscroll': dragscroll,
	},
	components: {
		Mapbox,
	},
    data() {
        return { 
			scaling: false,
			isRotateMessageShowing: true,
		}
	},
	methods: {

		onRotateMessageClick() {
			this.isRotateMessageShowing = false;
			sessionStorage.test = false;
		},

		test(e) {
			if (e.touches.length < 2) {
				e.stopImmediatePropagation(); 
				return false;
			}
		},
	/*
		touchHandler(e) {
			

			if (document.documentElement.clientWidth < 992) {
				if (e.touches.length > 1) {
					this.scaling = true;
				}
			}
		},

		touchMove(e) {		
			if (this.scaling) {
				let dist = Math.hypot(e.touches[0].pageX - e.touches[1].pageX, e.touches[0].pageY - e.touches[1].pageY);
				document.querySelector('.mapWrap img').style.transform = `scale(1.${dist/2})`;
			}
			
		},

		touchEnd(e) {
			if (this.scaling) {
				this.scaling = false;
			}
		},

		zoom(e) {
			e.preventDefault();
			const mapImg = this.$refs.mapImg;
			const mapWrap = this.$refs.mapWrap;
			const mapH = mapImg.offsetHeight;
			const mapWH = mapWrap.clientHeight;

			if (e.deltaY < 0) {
				//console.log(mapH);
				if (mapImg.height - e.deltaY + 20 < 1901 ) {
					mapImg.height = mapImg.height - e.deltaY;
				}
			}
			else if (e.deltaY > 0) {
				//console.log('scrolling down');
				if (mapImg.height - e.deltaY + 20 > mapWH) {
					mapImg.height = mapImg.height - e.deltaY;
				
				}
			}
		},
		*/
		loaded(map) {
			map.loadImage(MarkerIcon, function(error, image) {
				if (error) throw error;
				map.addImage("custom-marker", image);
				map.addLayer({
					id: "markers",
					type: "symbol",
					source: {
						type: "geojson",
						data: {
							type: 'FeatureCollection',
							features: [
								{
									type: 'Feature',
									properties: {
										title: "Южная Африка",
										description: "— это апельсины, лимоны, грейпфруты, мандарины, яблоки, груши и виноград",
									},
									geometry: {
										type: "Point",
										coordinates: [23.9329, -30.0444],
									},
								},
								{
									type: 'Feature',
									properties: {
										title: "Южная Африка",
										description: "— это апельсины, лимоны, грейпфруты, мандарины, яблоки, груши и виноград",
									},
									geometry: {
										type: "Point",
										coordinates: [-6.680, 33.694]
									}
								},
								{
									type: 'Feature',
									properties: {
										title: "Южная Африка",
										description: "— это апельсины, лимоны, грейпфруты, мандарины, яблоки, груши и виноград",
									},
									geometry: {
										type: "Point",
										coordinates: [-69.421, -26.583]
									}
								},
								{
									type: 'Feature',
									properties: {
										title: "Южная Африка",
										description: "— это апельсины, лимоны, грейпфруты, мандарины, яблоки, груши и виноград",
									},
									geometry: {
										type: "Point",
										coordinates: [-66.792, -39.189]
									}
								},
								{
									type: 'Feature',
									properties: {
										title: "Южная Африка",
										description: "— это апельсины, лимоны, грейпфруты, мандарины, яблоки, груши и виноград",
									},
									geometry: {
										type: "Point",
										coordinates: [30.623, 59.894]
									}
								},
								{
									type: 'Feature',
									properties: {
										title: "Южная Африка",
										description: "— это апельсины, лимоны, грейпфруты, мандарины, яблоки, груши и виноград",
									},
									geometry: {
										type: "Point",
										coordinates: [132.283, 43.346]
									}
								},
							]
						}
					},
					layout: {
						"icon-image": "custom-marker",
						'icon-size': 0.8
					}
				});
			});
			map.dragRotate.disable();
			map.touchZoomRotate.disableRotation();

		},
		clicked(map, e) {
			if (e.features) {
				const coordinates = e.features[0].geometry.coordinates.slice()
				while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
					coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
				}

				new mapboxgl.Popup()
				.setLngLat({ lng: coordinates[0], lat: coordinates[1] })
				.setHTML('<div id="vue-popup-content"></div>')
				.addTo(map)

				new popupContent({
					propsData: { feature: e.features[0] },
				}).$mount('#vue-popup-content')
			}
		},
		mouseEntered(map,e) {
			map.getCanvas().style.cursor = 'pointer';
		},
		mouseLeft(map) {
			map.getCanvas().style.cursor = ''
		},
	},
	created() {
		setTimeout(() => {
			this.$refs.mapWrap.scrollTo({
				top: (document.documentElement.clientWidth < 768) ? 20 : 0,
				left: (document.documentElement.clientWidth < 768) ? this.$refs.mapImg.clientWidth/2 - this.$refs.mapWrap.clientWidth/2 - 100 : this.$refs.mapImg.clientWidth/2 - this.$refs.mapWrap.clientWidth/2 - 50,
				behavior: 'smooth'
			});
		}, 1500);
	},
	mounted() {
		if (sessionStorage.test) {
			this.isRotateMessageShowing = JSON.parse(sessionStorage.test);
		}
	}
}
</script>

<style lang="less">
  @import '../../less/variables.less';

    .mapSection {
		width: 100%;

		.hideScroll {
			overflow: hidden;
			width: 100%;
        	height: 500px;

			.up(@md; {
				height: 720px;
			});

			.up(@xl; {
				height: 990px;
			});

		}

	    .mapWrap {
			width: 100%;
			overflow: hidden; 
			position: relative;

			&__rotate {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-flow: column;
				background: #0045a0d1;

				.icon {
					margin: 0 auto;
				}

				h6 {
					max-width: 300px;
					text-align: center;
				}

				.up(@sm;{
					display: none;
				});

				.upLand(@xs;{
					display: none;
				});
			}
			
			img {
				max-width: none;
				width: 100%;

				&:active {
				}

				.up(@md;{
					//height: auto;
				});

				.up(@xl;{
					//height: auto;
				});
			}
	    }

		.row {
			position: relative;
		}

		.infoSection__title {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			padding: 30px 30px 0;
			z-index: 1;
			color: @white;
			pointer-events: none;

			.up(@lg;{
				padding-top: 80px;
			});

			.down(@lg;{
				background: #0045a0;
				position: unset;
			})
		}

		#map {
			width: 100%;
        	height: 500px;

			.up(@md; {
				height: 720px;
			});

			.up(@xl; {
				height: 990px;
			});
		}

		.marker {
			//background-image: url('../../assets/icons/marker_big.png');
			background-size: cover;
			width: 22px;
			height: 22px;
			border-radius: 50%;
			cursor: pointer;

			&:hover {
				width: 40px;
				height: 40px;
			}
		}
/*
      .vue-map-container {
        height: 500px;

        .up(@md; {
          height: 720px;
        });

        .up(@xl; {
          height: 900px;
        });
	  }
*/
	}

	.mapboxgl-canvas {
		cursor: auto;
	}

	.mapboxgl-ctrl-top-right,
	.mapboxgl-ctrl-bottom-right {
			display: none;
	}

	.mapboxgl-ctrl-compass {
		display: none !important;
	}
</style>
