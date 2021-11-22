export default {
    map: {
        geoserverUrl: process.env.GEOSERVER_URL || window.location.origin.replace('geodashboard', 'geoserver'),
        zoom: 7,
        center: [-9972968, 4972295],
        useCluster: true,
        clusterDistance: 45,
        clusterExpandCountThreshold: 10,
        clusterExpandZoomThreshold: 12,
        layers: {
        }
    },
    geostreamingEndpoint: process.env.GEOSTREAMS_URL || window.location.origin.replace('geodashboard', 'geostreams'),
    sensors: {
        maxDisplayParameters: 10,
        displayOnlineStatus: true
    },
    source: {
        'ads': {
            label: 'Atmospheric Deposition Station',
            color: '#bf5fff',
            description:''
        },
        'ameriflux': {
            label: 'AmeriFlux Tower Station',
            color: '#0d71ba',
            description:'Funding for AmeriFlux data resources was provided by the ' +
                'U.S. Department of Energy’s Office of Science. ' +
                'QAQC: Tilden Meyers AmeriFlux US-Bo1 Bondville, doi:10.17190/AMF/1246036 ',
            more_info: 'Click here for more information',
            link : 'http://dx.doi.org/10.17190/AMF/1246036'
        },
        'ats': {
            label: 'AmeriFlux Tower Station',
            color: '#0d71ba',
            description:''
        },
        'greon': {
            label: 'Great Rivers Ecological Observation Network',
            color: '#bdaf05',
            description:''
        },
        'ifis': {
            label: 'IFC River Sensor',
            color: '#a17c6c',
            description:''
        },
        'imlczo': {
            label: 'Intensively Managed Landscapes - Critical Zone Observatory',
            color: '#C4B9A2',
            description:''
        },
        'iml-czo': {
            label: 'Intensively Managed Landscapes - Critical Zone Observatory',
            color: '#C4B9A2',
            description:''
        },
        'in-field download': {
            label: 'In-Field Download',
            color: '#127b1d',
            description:''
        },
        'in-field measurement': {
            label: 'In-Field Measurement',
            color: '#642bd8',
            description:''
        },
        'internet': {
            label: 'Internet',
            color: '#d80d50',
            description:''
        },
        'isws': {
            label: 'ISWS Stream And Nutrient Station',
            color: '#f7941e',
            description:''
        },
        'lab analysis': {
            label: 'Lab Analysis',
            color: '#5F99C1',
            description:''
        },
        'ps': {
            label: 'Precipitation Station',
            color: '#cc2128',
            description:''
        },
        'ss': {
            label: 'Sediment Station',
            color: '#4d6363',
            description:''
        },
        'usgs': {
            label: 'United States Geological Survey',
            color: '#39B54A',
            description:'U.S. Geological Survey conducts long-term monitoring of ' +
                'lakes and rivers nationwide. They have gauges throughout ' +
                'many rivers in the Great Lakes basin. We\'ve chosen five ' +
                'principal rivers to focus on for this website, one on each ' +
                'lake: St. Louis River (Superior), St. Joseph River (Michigan), ' +
                'Saginaw River (Huron), Maumee River (Erie) and Oswego River ' +
                '(Ontario). In each river, we present data from gauges with the ' +
                'most complete long term data set. The data provided from each ' +
                'gauge is currently for discharge only. Measurements are taken ' +
                'daily. *Note that USGS posts both approved data (quality-assured) ' +
                'as well as more recent provisional data (accuracy unverified and ' +
                'subject to revision). Most current data are provisional. The data ' +
                'are released on the condition that neither the USGS nor the United ' +
                'States Government may be held liable for any damages resulting ' +
                'from its authorized or unauthorized use.',
            more_info: 'For more information and for access to all USGS water quantity and quality data.',
            link : 'http://waterdata.usgs.gov/nwis'
        }
    },
    locations: []
};
