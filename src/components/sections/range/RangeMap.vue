<template>
    <GmapMap

            id="map"
            class="lg:w-full sm:w-w550 h-w585 sm:ml-auto sm:mr-auto"
            :center="{lat:37.2756537, lng:-104.6561154}"
            :zoom="4"
            map-type-id="terrain"
            :options="{
                disableDefaultUI: true,
                draggable: false,
                styles: mapStyles
            }" >

        <GmapMarker
                v-for="(latlngsmark, index) in latlngsmarks" :key="index"
                :icon="icon"
                ref="myMarker"
                :position="google && new google.maps.LatLng(latlngsmark.lat, latlngsmark.lng)" />
    </GmapMap>
</template>

<script>
    import { gmapApi } from "vue2-google-maps";

    export default {
        name: "RangeMap",
        data() {
            return {
                icon: require("@/assets/images/marker.png"),
                latlngsmarks: [],
                mapStyles: [
                    {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#d6d9dd"
                    }]
                },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#fafaf9"
                        }]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#d6d9dd"
                        }]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                            "color": "#d6d9dd"
                        },
                        {
                            "weight": 0.2
                        }]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#d6d9dd"
                        }]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#d6d9dd"
                        }]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#f5f5f5"
                        }]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#dedede"
                        }]
                    }, {
                        "elementType": "labels.text.stroke",
                        "stylers": [{
                            "visibility": "off"
                        }, {
                            "color": "transparent"
                        }]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "visibility": "off"
                        }, {
                            "saturation": 36
                        }, {
                            "color": "transparent"
                        }]
                    }, {
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#f2f2f2"
                        }]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#bcbcbb"
                        }]
                    },
                    {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#bcbcbb"
                    },
                        {
                        "weight": 1.2
                    }]
                }
                ]
            }
        },
        computed: {
            google: gmapApi
        },
        mounted() {
            setTimeout(() => {
                let markerholder = [{
                    lat: 38.4849423,
                    lng: -119.2660452
                },
                    {
                        lat: 44.127451,
                        lng: -122.8260904
                    },
                    {
                        lat: 38.5618473,
                        lng: -118.2517366
                    },
                    {
                        lat: 37.7577627,
                        lng: -122.4726194
                    },
                    {
                        lat: 37.1931243,
                        lng: -123.796161
                    },
                    {
                        lat: 34.0207305,
                        lng: -118.6919144
                    },
                    {
                        lat: 32.8248175,
                        lng: -117.3891608
                    },
                    {
                        lat: 32.1561235,
                        lng: -111.0238885
                    },
                    {
                        lat: 31.8113481,
                        lng: -106.5646009
                    },
                    {
                        lat: 31.8113481,
                        lng: -106.5646009
                    },
                    {
                        lat: 29.4816561,
                        lng: -98.6544881
                    },
                    {
                        lat: 29.8174782,
                        lng: -95.6814747
                    },
                    {
                        lat: 30.3079827,
                        lng: -97.893485
                    },
                    {
                        lat: 31.1003754,
                        lng: -104.5682181
                    },
                    {
                        lat: 30.9348557,
                        lng: -92.5219924
                    },
                    {
                        lat: 30.0332195,
                        lng: -90.0226471
                    },
                    {
                        lat: 28.4813018,
                        lng: -81.4388783
                    },
                    {
                        lat: 27.9947147,
                        lng: -82.5943642
                    },
                    {
                        lat: 27.5321311,
                        lng: -88.2969393
                    },
                    {
                        lat: 25.7825453,
                        lng: -80.2994983
                    },
                    {
                        lat: 32.6627942,
                        lng: -85.4215603
                    },
                    {
                        lat: 32.5609337,
                        lng: -88.9240044
                    },
                    {
                        lat: 32.5558117,
                        lng: -92.1197166
                    },
                    {
                        lat: 33.7678358,
                        lng: -84.4906437
                    }];
                this.latlngsmarks.push(...markerholder);
            }, 100);
            setTimeout(() => {
                let markerholder = [{
                    lat: 33.6217276,
                    lng: -82.047716
                },
                    {
                        lat: 35.2033533,
                        lng: -80.9799122
                    },
                    {
                        lat: 35.1543345,
                        lng: -82.104142
                    },
                    {
                        lat: 37.9864142,
                        lng: -81.6639347
                    },
                    {
                        lat: 38.9169474,
                        lng: -81.3027468
                    },
                    {
                        lat: 38.8016061,
                        lng: -78.3580239
                    },
                    {
                        lat: 40.0026767,
                        lng: -75.2581111
                    },
                    {
                        lat: 42.0365786,
                        lng: -72.2439127
                    },
                    {
                        lat: 43.9978778,
                        lng: -72.6871481
                    },
                    {
                        lat: 45.170405,
                        lng: -71.227539
                    },
                    {
                        lat: 43.8682555,
                        lng: -73.5724819
                    },
                    {
                        lat: 42.7287838,
                        lng: -78.0128047
                    },
                    {
                        lat: 41.113619,
                        lng: -78.7257346
                    },
                    {
                        lat: 40.3459212,
                        lng: -84.9121421
                    },
                    {
                        lat: 37.8191513,
                        lng: -86.889306
                    },
                    {
                        lat: 39.7799642,
                        lng: -86.2728328
                    }];
                this.latlngsmarks.push(...markerholder);
            }, 200);
            setTimeout(() => {
                let markerholder = [
                    {
                        lat: 33.6217276,
                        lng: -82.047716
                    },
                    {
                        lat: 35.2033533,
                        lng: -80.9799122
                    },
                    {
                        lat: 35.1543345,
                        lng: -82.104142
                    },
                    {
                        lat: 37.9864142,
                        lng: -81.6639347
                    },
                    {
                        lat: 38.9169474,
                        lng: -81.3027468
                    },
                    {
                        lat: 38.8016061,
                        lng: -78.3580239
                    },
                    {
                        lat: 40.0026767,
                        lng: -75.2581111
                    },
                    {
                        lat: 42.0365786,
                        lng: -72.2439127
                    },
                    {
                        lat: 43.9978778,
                        lng: -72.6871481
                    },
                    {
                        lat: 45.170405,
                        lng: -71.227539
                    },
                    {
                        lat: 43.8682555,
                        lng: -73.5724819
                    },
                    {
                        lat: 42.7287838,
                        lng: -78.0128047
                    },
                    {
                        lat: 41.113619,
                        lng: -78.7257346
                    },
                    {
                        lat: 40.3459212,
                        lng: -84.9121421
                    },
                    {
                        lat: 37.8191513,
                        lng: -86.889306
                    },
                    {
                        lat: 39.7799642,
                        lng: -86.2728328
                    }];
                this.latlngsmarks.push(...markerholder);
            }, 300);
            setTimeout(() => {
                let markerholder = [
                    {
                        lat: 39.721961,
                        lng: -91.5094288
                    },
                    {
                        lat: 42.3528165,
                        lng: -83.1692446
                    },
                    {
                        lat: 41.8339037,
                        lng: -87.8720466
                    },
                    {
                        lat: 44.9827989,
                        lng: -88.5131985
                    },
                    {
                        lat: 39.721961,
                        lng: -91.5094288
                    },
                    {
                        lat: 38.2876179,
                        lng: -94.6800937
                    },
                    {
                        lat: 44.8827154,
                        lng: -91.8121383
                    },
                    {
                        lat: 41.9349081,
                        lng: -94.5108264
                    },
                    {
                        lat: 39.0921167,
                        lng: -94.8558996
                    },
                    {
                        lat: 38.2876179,
                        lng: -94.6800937
                    },
                    {
                        lat: 34.7490482,
                        lng: -93.2524708
                    },
                    {
                        lat: 35.2928236,
                        lng: -100.9596999
                    },
                    {
                        lat: 41.4831482,
                        lng: -101.9237322
                    },
                    {
                        lat: 46.4237271,
                        lng: -95.604067
                    },
                    {
                        lat: 44.2091875,
                        lng: -101.3681706
                    },
                    {
                        lat: 47.4642088,
                        lng: -101.4232394
                    },
                    {
                        lat: 42.982448,
                        lng: -109.7973176
                    },
                    {
                        lat: 38.9807326,
                        lng: -107.7935267
                    },
                    {
                        lat: 38.9807326,
                        lng: -107.7935267
                    },
                    {
                        lat: 34.150416,
                        lng: -108.2692637
                    },
                    {
                        lat: 39.4824524,
                        lng: -113.7899621
                    },
                    {
                        lat: 46.6615215,
                        lng: -112.2873328
                    },
                    {
                        lat: 23.3143515,
                        lng: -111.6390643
                    },
                    {
                        lat: 25.4688146,
                        lng: -102.0577275
                    },
                    {
                        lat: 25.6490376,
                        lng: -100.44318
                    },
                    {
                        lat: 24.9311949,
                        lng: -98.4107304
                    },
                    {
                        lat: 21.8426242,
                        lng: -106.3254918
                    }];
                this.latlngsmarks.push(...markerholder);
            }, 400);
            setTimeout(() => {
                let markerholder = [
                    {
                        lat: 19.3910038,
                        lng: -99.2836969
                    },
                    {
                        lat: 22.8244483,
                        lng: -101.4321781
                    },
                    {
                        lat: 39.5581117,
                        lng: -119.9909242
                    },
                    {
                        lat: 37.1049502,
                        lng: -113.6335372
                    },
                    {
                        lat: 35.9647946,
                        lng: -110.9281347
                    },
                    {
                        lat: 35.7775654,
                        lng: -114.1508471
                    },
                    {
                        lat: 35.3211764,
                        lng: -119.1587702
                    },
                    {
                        lat: 35.574935,
                        lng: -117.6675163
                    },
                    {
                        lat: 32.6058056,
                        lng: -114.6420978
                    },
                    {
                        lat: 34.9323759,
                        lng: -120.4663843
                    },
                    {
                        lat: 34.8886072,
                        lng: -120.3236348
                    },
                    {
                        lat: 34.8661311,
                        lng: -120.2955509
                    },
                    {
                        lat: 34.8736804,
                        lng: -120.4581599
                    },
                    {
                        lat: 34.8375467,
                        lng: -120.5346313
                    },
                    {
                        lat: 34.8105525,
                        lng: -120.607536
                    },
                    {
                        lat: 34.7046669,
                        lng: -120.4741967
                    },
                    {
                        lat: 34.6877389,
                        lng: -120.4473025
                    },
                    {
                        lat: 34.6986326,
                        lng: -120.4361115
                    },
                    {
                        lat: 34.7429593,
                        lng: -120.5495254
                    },
                    {
                        lat: 34.638481,
                        lng: -120.5101319
                    },
                    {
                        lat: 39.7645187,
                        lng: -104.9951943
                    },
                    {
                        lat: 39.7645187,
                        lng: -104.9951943
                    },
                    {
                        lat: 39.7645187,
                        lng: -104.9951943
                    },
                    {
                        lat: 40.4076766,
                        lng: -105.0959414
                    },
                    {
                        lat: 40.4874985,
                        lng: -105.2195725
                    },
                    {
                        lat: 40.6824968,
                        lng: -105.3979105
                    },
                    {
                        lat: 41.900566,
                        lng: -106.219729
                    },
                    {
                        lat: 41.8674065,
                        lng: -106.5642128
                    },
                    {
                        lat: 41.654427,
                        lng: -106.13932
                    },
                    {
                        lat: 42.4701424,
                        lng: -107.8525899
                    }
                ];
                this.latlngsmarks.push(...markerholder);
            }, 500);
            setTimeout(() => {
                let markerholder = [
                    {
                        lat: 41.2571376,
                        lng: -106.4729947
                    },
                    {
                        lat: 41.1475918,
                        lng: -104.8024239
                    },
                    {
                        lat: 37.9963014,
                        lng: -87.5787989
                    },
                    {
                        lat: 36.9728661,
                        lng: -86.4900026
                    },
                    {
                        lat: 35.9585806,
                        lng: -83.9951222
                    },
                    {
                        lat: 37.2743851,
                        lng: -79.9925619
                    },
                    {
                        lat: 37.5247764,
                        lng: -77.5633011
                    },
                    {
                        lat: 38.4077326,
                        lng: -82.4769553
                    },
                    {
                        lat: 26.7420741,
                        lng: -80.1990798
                    },
                    {
                        lat: 28.1176141,
                        lng: -80.1990798
                    },
                    {
                        lat: 28.9588566,
                        lng: -82.0488652
                    },
                    {
                        lat: 26.1449798,
                        lng: -81.8295594
                    },
                    {
                        lat: 39.1682873,
                        lng: -96.6549238
                    },
                    {
                        lat: 41.3688507,
                        lng: -96.1729528
                    },
                    {
                        lat: 41.6040596,
                        lng: -109.2366346
                    },
                    {
                        lat: 42.7501754,
                        lng: -109.7203079
                    },
                    {
                        lat: 46.4053763,
                        lng: -105.8555946
                    },
                    {
                        lat: 45.8848508,
                        lng: -104.5552477
                    },
                    {
                        lat: 34.194319,
                        lng: -101.7457124
                    },
                    {
                        lat: 34.4540576,
                        lng: -103.2685332
                    },
                    {
                        lat: 31.629947,
                        lng: -103.0882483
                    },
                    {
                        lat: 30.7482946,
                        lng: -99.2353362
                    },
                    {
                        lat: 30.6777076,
                        lng: -99.5805312
                    },
                    {
                        lat: 30.2678954,
                        lng: -98.8955696
                    },
                    {
                        lat: 29.9691202,
                        lng: -98.5309989
                    },
                    {
                        lat: 37.3467354,
                        lng: -118.3493897
                    },
                    {
                        lat: 49.6886688,
                        lng: -112.9156108
                    },
                    {
                        lat: 39.5581117,
                        lng: -119.9909242
                    },
                    {
                        lat: 37.0473635,
                        lng: -100.9489195
                    }
                ];
                this.latlngsmarks.push(...markerholder);
            }, 600);
            setTimeout(() => {
                let markerholder = [
                    {
                        lat: 37.7599042,
                        lng: -100.0343828
                    },
                    {
                        lat: 36.4196072,
                        lng: -99.425108
                    },
                    {
                        lat: 36.3755986,
                        lng: -99.6276698
                    },
                    {
                        lat: 36.4930724,
                        lng: -99.9712548
                    },
                    {
                        lat: 37.9792935,
                        lng: -100.8783031
                    },
                    {
                        lat: 37.0954498,
                        lng: -94.5783992
                    },
                    {
                        lat: 37.4169936,
                        lng: -94.7396133
                    },
                    {
                        lat: 38.0945191,
                        lng: -94.3705168
                    },
                    {
                        lat: 38.1392616,
                        lng: -93.7346883
                    }
                ];
                this.latlngsmarks.push(...markerholder);
            }, 700);
            setTimeout(() => {
                let markerholder = [
                    {
                        lat: 39.2694967,
                        lng: -114.9079839
                    },
                    {
                        lat: 37.6849712,
                        lng: -113.1370693
                    },
                    {
                        lat: 44.0612384,
                        lng: -121.384684
                    },
                    {
                        lat: 44.1304022,
                        lng: -119.9707674
                    },
                    {
                        lat: 44.9885016,
                        lng: -118.9562292
                    },
                    {
                        lat: 45.4876052,
                        lng: -118.8476192
                    },
                    {
                        lat: 45.1363689,
                        lng: -121.0015165
                    },
                    {
                        lat: 44.7350104,
                        lng: -122.1584973
                    },
                    {
                        lat: 41.1277558,
                        lng: -100.7945923
                    },
                    {
                        lat: 41.4049617,
                        lng: -99.6452142
                    },
                    {
                        lat: 40.922045,
                        lng: -98.4298736
                    },
                    {
                        lat: 41.4328885,
                        lng: -97.3839799
                    },
                    {
                        lat: 41.2555814,
                        lng: -97.143159
                    }
                ];
                this.latlngsmarks.push(...markerholder);
            }, 800);
        }
    }
</script>

<style scoped>

</style>