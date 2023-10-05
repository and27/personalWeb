import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const LayoutSVG = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center end', '0.5 0.4']
  });

  const scrollYProgress0 = useTransform(scrollYProgress, [0, 1], [-0.4, 1]);
  const scrollYProgress1 = useTransform(scrollYProgress, [0, 1], [-1.5, 1]);
  const scrollYProgress2 = useTransform(scrollYProgress, [0, 1], [-1.1, 1]);
  const scrollYProgress3 = useTransform(scrollYProgress, [0, 1], [-0.7, 1]);

  const scrollYProgressBackground = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref}>
      <svg
        width="100mm"
        height="120mm"
        viewBox="0 0 182.03436 210.87589"
        version="1.1"
        id="svg29275"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs id="defs29272" />
        <g id="layer3Body">
          <g id="g53487" transform="matrix(1.9735647,0,0,1.9735647,163.40907,-60.071016)">
            <path
              fill="#bbb"
              id="path9220"
              d="m -30.141315,46.766047 c -0.252055,0.0024 -0.675992,0.07158 -1.084172,0.183452 -5.340911,1.46378 -7.218214,1.762482 -11.934156,1.898592 -3.663759,0.10575 -3.886684,0.08436 -6.301427,-0.609782 -0.36768,-0.10569 -0.44646,0.0084 -0.8046,1.163753 -1.77294,5.71911 -1.49198,15.116891 0.57361,19.177641 0.54055,1.06267 2.470682,3.351846 3.524332,4.180106 1.81831,1.42935 3.432117,2.100796 5.627048,2.340426 1.801939,0.19672 4.620543,0.0034 5.787244,-0.396875 1.59503,-0.54726 2.928691,-1.452348 4.380611,-2.972428 2.98722,-3.127451 4.0381,-6.815042 3.812169,-13.376962 -0.05687,-1.65177 -0.243226,-3.664275 -0.415996,-4.490165 -0.5163,-2.468 -2.354879,-6.838327 -2.977078,-7.077087 -0.03884,-0.0149 -0.103566,-0.02148 -0.187585,-0.02067 z m -3.664376,7.10706 c 1.3144,-0.03 2.806547,0.998045 2.806547,2.085661 0,0.51798 -0.06785,0.617366 -0.420645,0.612366 -0.231521,-0.0033 -0.667348,-0.189629 -0.968418,-0.413929 -0.406889,-0.30314 -0.911468,-0.433596 -1.964737,-0.508496 -1.278001,-0.09085 -1.422347,-0.141066 -1.474846,-0.510046 -0.06567,-0.46137 0.479724,-0.899541 1.474846,-1.184941 0.175649,-0.05038 0.359481,-0.07633 0.547253,-0.08062 z m -11.019999,0.04134 c 1.10906,-0.02527 1.946651,0.485234 1.946651,1.185974 0,0.42039 -0.07982,0.453069 -1.309997,0.541569 -0.980241,0.07053 -1.525368,0.223642 -2.167826,0.608232 -1.201808,0.71942 -1.480018,0.674235 -1.480018,-0.238745 0,-1.02981 1.48247,-2.06223 3.01119,-2.09703 z m 20.653002,4.196643 c -0.114554,-0.0013 -0.209349,0.03775 -0.264583,0.127124 -0.187471,0.30336 -0.441164,5.023441 -0.283702,5.278231 0.201448,0.32595 0.893053,-0.263213 1.345652,-1.146183 0.456102,-0.8898 0.571812,-2.565991 0.237712,-3.444751 -0.169283,-0.445215 -0.69142,-0.81057 -1.035079,-0.814421 z m -29.323272,0.75706 c -0.07,-0.0027 -0.17181,0.09367 -0.34158,0.30179 -0.25522,0.3129 -0.3607,0.731999 -0.3607,1.437639 0,1.14597 0.23311,1.872226 0.79271,2.469616 0.2165,0.23112 0.42642,0.387999 0.46612,0.3483 0.0848,-0.08479 -0.31103,-4.005155 -0.44597,-4.416785 -0.0297,-0.09048 -0.0627,-0.138678 -0.11058,-0.14056 z m 19.526971,17.413924 -1.087271,0.224792 c -1.647092,0.33998 -2.058024,0.384889 -3.473174,0.381889 -0.72997,-0.0016 -1.730092,-0.03982 -2.502173,-0.09612 -0.70743,-0.0515 -1.295913,-0.0848 -1.307415,-0.0739 -0.0115,0.01093 -0.0544,0.807881 -0.0956,1.770951 -0.0413,0.96306 -0.08462,1.759518 -0.09612,1.769918 -0.01153,0.0104 -0.252399,0.04263 -0.535368,0.07183 -0.58733,0.06053 -0.779526,0.106509 -0.994257,0.238228 -0.102108,0.06266 -0.151926,0.129506 -0.151926,0.203606 0,0.43904 2.065049,2.485992 2.96726,2.941422 0.66731,0.336861 1.542039,0.606746 2.224669,0.685746 1.945262,0.22512 4.09475,-0.41577 5.566069,-1.65933 0.410961,-0.34734 0.630526,-0.596002 1.054716,-1.194242 0.488839,-0.68943 0.594453,-0.965034 0.406694,-1.061434 -0.04502,-0.0231 -0.292587,-0.05543 -0.549836,-0.07183 -0.59282,-0.03773 -0.776814,-0.08998 -0.973585,-0.276986 -0.347019,-0.32982 -0.452646,-0.977441 -0.452686,-2.773991 z"
            />
            <path
              fill="#111"
              id="path1848"
              d="m -426.55664,-149.81836 v 0.002 c -2.1936,0.008 -3.56019,0.58229 -3.55664,1.83985 0.002,0.67702 0.92515,2.74424 2.05273,4.59375 1.12758,1.84955 1.88989,3.52454 1.69336,3.7207 -0.19615,0.19616 -5.54411,-0.37228 -11.88476,-1.26367 -12.11237,-1.70249 -16.5325,-1.34986 -17.58789,1.40039 -0.57079,1.48747 1.34138,10.32351 3.10351,14.33789 0.53416,1.21724 -0.57695,1.95508 -5.09375,3.37891 -2.50836,0.79071 -5.14233,1.10315 -8.65234,1.24609 -0.004,0.0113 -0.11525,0.007 -0.16211,0.0391 -2.17202,1.39087 -3.18054,4.30111 -4.79492,6.07227 l -2.3086,1.99609 c -1.72191,1.49016 -4.08256,4.28595 -5.24609,6.21094 -4.20609,6.958563 -2.20165,20.497304 5.05859,34.167968 2.90351,5.467238 2.98427,5.977576 2.29493,14.253906 -0.65515,7.86437 -0.92692,8.686696 -3.25586,9.830078 -4.53238,2.22516 -6.73511,6.313973 -6.59375,12.240235 0.17461,7.329373 2.89873,12.521097 7.87304,15.003906 3.69619,1.844863 4.20794,2.627422 6.74219,10.308594 4.26883,12.9386455 12.39069,22.790669 24.25781,29.425781 l 6,3.353516 v 5.894531 c 0,5.792882 -0.0548,5.908269 -3.20508,6.724609 -1.76285,0.456832 -3.78786,1.61374 -4.5,2.572266 -0.82473,1.10982 -4.4846,2.38702 -10.08007,3.515625 -18.77655,3.787238 -35.71597,12.221281 -44.4336,22.125 l -2.32226,8.341797 c 117.09776,0.649822 142.82854,-0.336897 177.63239,-0.320418 0.33169,-5.785049 0.98701,-3.225578 -4.13825,-8.51552 -11.42801,-11.78615 -30.1675,-20.461789 -48.60547,-22.503906 -4.93663,-0.546746 -7.07816,-1.338109 -9.63281,-3.560547 -1.80661,-1.571716 -4.16913,-2.857422 -5.25,-2.857422 -1.58963,0 -1.98231,-0.716664 -2.04883,-3.75 -0.0454,-2.06245 -0.27213,-4.897417 -0.50586,-6.298828 -0.36132,-2.166198 0.46141,-3.172343 5.49023,-6.71875 10.48221,-7.3922643 17.51499,-18.0383506 21.05664,-31.873047 0.94431,-3.688743 1.45695,-4.215525 4.70118,-4.824218 5.32561,-0.999009 8.89971,-5.092554 10.28906,-11.785157 1.43135,-6.894648 0.57918,-11.970055 -2.65235,-15.810547 -2.36194,-2.806979 -2.41331,-3.177033 -1.375,-9.86914 2.7029,-17.420523 0.11188,-29.190004 -8.25781,-37.503906 -3.49705,-3.473802 -6.45257,-5.441076 -9.16211,-6.097656 -3.68735,-0.89344 -4.04547,-1.28141 -4.56836,-4.96875 -0.31181,-2.20003 -0.88113,-4.94075 -1.26562,-6.08984 -0.78875,-2.52545 -1.41731,-4.86697 -1.96485,-7.11133 -3.7e-4,-10e-4 3e-4,-0.003 0,-0.004 0.0189,-2.3e-4 0.034,2.3e-4 0.0488,0 -0.0113,-0.008 -0.0237,-0.0157 -0.0312,-0.0195 0.0265,0.008 0.0711,0.0118 0.084,0.0156 l -0.002,-0.002 c -0.034,-0.0113 -0.0723,-0.0217 -0.10937,-0.0293 0.003,0.0151 0.003,0.0219 0.008,0.0332 -0.12246,0.002 -0.24045,-10e-4 -0.36328,0.002 l -5.03711,-6.6914 c -5.79764,-7.70026 -10.86783,-12.28517 -19.0293,-17.20899 -7.05369,-4.25548 -15.88297,-6.98576 -20.70898,-6.96875 z m -43.41602,29.43555 c -0.003,0.008 -0.004,0.012 -0.008,0.0195 l 0.0195,-0.0195 z m 89.16016,1.12109 c -9.8e-4,7.9e-4 -0.003,4.8e-4 -0.004,0.002 l 0.0332,0.0234 c -0.0113,-0.008 -0.018,-0.0159 -0.0293,-0.0234 z m 0.0762,0.0625 c 9e-4,0.004 -4.7e-4,0.008 0.002,0.008 0.004,0.001 0.006,0.003 0.0137,0.004 -0.004,-0.004 -0.01,-0.008 -0.0137,-0.0117 z m -0.67773,0.22266 c 0.003,0.002 0.006,0.003 0.01,0.008 l -0.006,-0.002 c -0.002,-3.8e-4 -0.002,-0.002 -0.004,-0.004 z m -90.59766,3.74414 c -0.0113,0.0189 -0.0219,0.0401 -0.0332,0.0605 h 0.0293 c -5e-4,-0.0227 0.003,-0.0401 0.004,-0.0605 z m 87.20117,26.431639 c 2.54763,0.164031 3.14934,2.385866 5.69141,7.810547 6.46507,13.796107 8.45745,23.596796 8.38867,41.246093 -0.0654,16.822451 -1.52545,24.812479 -6.4043,35.0351566 -3.93735,8.2499906 -12.05649,16.3900364 -20.48828,20.5410154 -6.04755,2.977096 -7.6472,3.310415 -17.32812,3.609375 -11.69378,0.360945 -18.04993,-1.083858 -26.46875,-6.017578 -5.96628,-3.4965164 -14.96382,-13.423762079724 -18.01367,-19.8749999 -8.23336,-17.4156091 -8.56112,-54.5768091 -0.66407,-75.3476561 0.94802,-2.493581 0.97623,-2.498053 4.2168,-0.794922 7.97212,4.189833 40.36894,2.352027 59.76367,-3.390625 6.16686,-1.825965 9.32514,-2.943928 11.30664,-2.816406 z m -13.16211,27.55664 c -4.05547,0 -8.14453,2.288169 -8.14453,4.556641 0,1.607169 0.72314,1.778877 6.5,1.556641 2.67651,-0.102804 4.82718,0.507233 6.5,1.84375 3.34518,2.672617 5,2.550665 5,-0.369141 0,-3.543383 -5.25434,-7.587891 -9.85547,-7.587891 z m -41.8789,0.03711 c -2.33374,-0.01134 -4.87596,0.646684 -7.05078,1.972656 -3.65313,2.227313 -5.52583,5.818765 -4.01368,7.697266 0.73448,0.912529 1.92508,0.574529 4.88282,-1.382813 3.1163,-2.061014 4.7184,-2.480061 7.875,-2.05664 5.19746,0.697096 7.07998,-1.228612 4.10742,-4.201172 -1.3415,-1.341468 -3.467,-2.018979 -5.80078,-2.029297 z m 77.24804,14.953125 c 0.14521,-0.02495 0.30256,-0.0257 0.46875,0 0.79772,0.123212 1.8381,0.830284 3.12696,2.11914 3.04876,3.048718 2.38772,13.666147 -1.08008,17.357422 -4.23583,4.508863 -5.40617,3.455077 -4.68164,-4.216797 0.35074,-3.712516 0.64075,-8.662475 0.64453,-11 0.003,-2.66776 0.505,-4.084645 1.52148,-4.259765 z m -36.89453,2.115234 c -3.11425,0 -4.66406,1.828227 -4.66406,5.5 0,1.705021 0.53924,3.638847 1.19922,4.298828 1.66087,1.660762 4.35697,1.50051 6.22851,-0.371094 3.05579,-3.055785 1.18783,-9.427734 -2.76367,-9.427734 z m -73.38867,0.488281 c 0.0454,-0.0072 0.0885,-0.0072 0.12891,0.002 0.54194,0.120945 0.69228,1.733397 1.08789,6.025391 0.34885,3.783383 0.86125,8.341417 1.13867,10.128906 0.2778,1.78749 0.3715,3.213387 0.20898,3.169922 -5.53583,-1.479912 -8.25096,-13.90915 -3.97265,-18.1875 0.65185,-0.651859 1.0908,-1.088226 1.4082,-1.138672 z m 34.4336,0.40625 c -3.11427,0 -4.66407,1.828227 -4.66407,5.5 0,1.705021 0.53923,3.638847 1.19922,4.298829 1.66087,1.660762 4.35697,1.500509 6.22852,-0.371094 3.05579,-3.055786 1.18781,-9.427735 -2.76367,-9.427735 z m 39.33593,66.339844 v 6.628906 c 0,7.342489 0.97087,9.03125 5.19922,9.03125 3.53416,0 3.50625,0.645686 -0.25,5.753907 -1.90942,2.596384 -4.99572,5.073705 -8.25,6.623046 -8.45383,4.025008 -17.0341,4.085005 -24.59765,0.173829 -3.60507,-1.864252 -11.10157,-9.419652 -11.10157,-11.189453 0,-0.679371 1.46251,-1.376482 3.25,-1.548829 l 3.25,-0.3125 0.29492,-6.767578 0.29688,-6.767578 9.20312,0.613281 c 6.3049,0.419112 11.33113,0.161387 15.95508,-0.814453 z"
              transform="matrix(0.26458333,0,0,0.26458333,71.491241,70.077286)"
            />
            <path
              stroke="#111"
              fill="none"
              d="m -42.505047,68.893918 c 1.161302,0.561381 2.461668,0.877592 3.757189,0.771749 1.272333,-0.103949 2.474767,-0.630443 3.524193,-1.339459 0.289632,-0.195682 0.569664,-0.405401 0.841311,-0.625314"
              id="path11748"
            />
            <path
              stroke="#111"
              fill="none"
              d="m -39.104638,71.61773 c 0.533313,0.111318 1.089622,0.161354 1.628206,0.05628 0.339344,-0.06621 0.666922,-0.20096 0.945244,-0.407542"
              id="path15686"
            />
          </g>
        </g>
        <g id="layer1Website" transform="translate(-63.849039,39.501807)">
          <motion.rect
            style={{
              // opacity: scrollYProgressBackground,
              // fillOpacity: 1,
              fill: '#333',
              stroke: '#101010',
              strokeWidth: 0,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              paintOrder: 'stroke fill markers'
            }}
            id="rect2392"
            width="167.34918"
            height="101.2968"
            x="71.491241"
            y="70.077286"
            ry="3.8661482"
          />
          <motion.rect
            style={{
              opacity: scrollYProgress0,
              fill: '#b3b3b3',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 0.304325,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeOpacity: 1,
              paintOrder: 'stroke fill markers'
            }}
            id="rect2394"
            width="44.919579"
            height="36.584499"
            x="96.410187"
            y="92.001328"
            ry="1.4550664"
          />
          <motion.path
            style={{
              opacity: scrollYProgress0,
              fill: '#808080',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: '0.255756px',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeOpacity: 1
            }}
            d="m 96.96821,128.30766 c -0.25255,-0.26187 -0.55804,-0.62065 -0.55804,-1.11604 v -14.7555 l 12.63741,-10.08793 9.52695,10.42419 12.57558,-8.07034 10.27847,9.53094 -0.0988,14.35286 c 0,0 -27.80103,-0.01 -42.28615,0.0201 -0.78485,-0.0186 -1.4692,0.10983 -2.07543,-0.29828 z"
            id="path2428"
          />
          <motion.path
            id="topBar"
            style={{
              fill: '#595959',
              opacity: scrollYProgressBackground,
              fillOpacity: 1,
              stroke: '#595959',
              strokeWidth: '0.999999px',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeOpacity: 1
            }}
            d="m 587.03906,10.978516 a 6.2040403,6.2040403 0 0 0 -6.20508,6.205078 6.2040403,6.2040403 0 0 0 6.20508,6.203125 6.2040403,6.2040403 0 0 0 6.20313,-6.203125 6.2040403,6.2040403 0 0 0 -6.20313,-6.205078 z m 18.61133,0 a 6.2040404,6.2040404 0 0 0 -6.20312,6.205078 6.2040404,6.2040404 0 0 0 6.20312,6.203125 6.2040404,6.2040404 0 0 0 6.20313,-6.203125 6.2040404,6.2040404 0 0 0 -6.20313,-6.205078 z M 3.0605469,33.501953 H 630.53125 Z"
            transform="matrix(0.26458333,0,0,0.26458333,71.491241,70.077286)"
          />
          <motion.path
            id="title"
            style={{
              opacity: scrollYProgress0,
              fill: '#b3b3b3',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 1.0665,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeOpacity: 1,
              paintOrder: 'stroke fill markers'
            }}
            d="m 293.32812,82.863281 c -1.51764,0 -2.73828,1.220638 -2.73828,2.738281 v 12.572266 c 0,1.517643 1.22064,2.738282 2.73828,2.738282 h 135.66993 c 1.51764,0 2.74023,-1.220639 2.74023,-2.738282 V 85.601562 c 0,-1.517643 -1.22259,-2.738281 -2.74023,-2.738281 z m 0,24.984379 c -1.51764,0 -2.73828,1.22259 -2.73828,2.74023 v 12.57031 c 0,1.51765 1.22064,2.74024 2.73828,2.74024 h 237.71094 c 1.51765,0 2.74024,-1.22259 2.74024,-2.74024 v -12.57031 c 0,-1.51764 -1.22259,-2.74023 -2.74024,-2.74023 z"
            transform="matrix(0.26458333,0,0,0.26458333,71.491241,70.077286)"
          />
          <motion.path
            id="description"
            style={{
              opacity: scrollYProgress0,
              fill: '#ffffff',
              fillOpacity: 0.212844,
              stroke: 'none',
              strokeWidth: 1.1502,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeOpacity: 1,
              paintOrder: 'stroke fill markers'
            }}
            d="m 293.58398,157.16992 c -1.6585,0 -2.99414,1.33563 -2.99414,2.99414 v 1.70899 c 0,1.65851 1.33564,2.99414 2.99414,2.99414 h 240.30274 c 1.65851,0 2.99414,-1.33563 2.99414,-2.99414 v -1.70899 c 0,-1.65851 -1.33563,-2.99414 -2.99414,-2.99414 z m 0,13.27735 c -1.6585,0 -2.99414,1.33563 -2.99414,2.99414 v 1.71093 c 0,1.65851 1.33564,2.99414 2.99414,2.99414 h 240.30274 c 1.65851,0 2.99414,-1.33563 2.99414,-2.99414 v -1.71093 c 0,-1.65851 -1.33563,-2.99414 -2.99414,-2.99414 z m 0,13.27929 c -1.6585,0 -2.99414,1.33563 -2.99414,2.99414 v 1.71094 c 0,1.65851 1.33564,2.99219 2.99414,2.99219 h 240.30274 c 1.65851,0 2.99414,-1.33368 2.99414,-2.99219 v -1.71094 c 0,-1.65851 -1.33563,-2.99414 -2.99414,-2.99414 z m 0,13.27735 c -1.6585,0 -2.99414,1.33563 -2.99414,2.99414 v 1.71093 c 0,1.65851 1.33564,2.99414 2.99414,2.99414 h 240.30274 c 1.65851,0 2.99414,-1.33563 2.99414,-2.99414 v -1.71093 c 0,-1.65851 -1.33563,-2.99414 -2.99414,-2.99414 z m 0,13.27929 c -1.6585,0 -2.99414,1.33563 -2.99414,2.99414 v 1.71094 c 0,1.65851 1.33564,2.99219 2.99414,2.99219 h 240.30274 c 1.65851,0 2.99414,-1.33368 2.99414,-2.99219 v -1.71094 c 0,-1.65851 -1.33563,-2.99414 -2.99414,-2.99414 z"
            transform="matrix(0.26458333,0,0,0.26458333,71.491241,70.077286)"
          />
          <motion.g
            id="g35431"
            transform="translate(80.652493)"
            style={{
              opacity: scrollYProgress1
            }}
          >
            <rect
              style={{
                fill: '#b3b3b3',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 0.481687,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                paintOrder: 'stroke fill markers'
              }}
              id="rect35427"
              width="36.352348"
              height="18.259254"
              x="96.441269"
              y="139.48448"
              ry="2.4497716"
            />
            <path
              id="path35429"
              style={{
                fill: '#808080',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 1.06164,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                paintOrder: 'stroke fill markers'
              }}
              d="m 123.37695,274.36133 a 12.034572,12.034572 0 0 0 -12.03515,12.03515 12.034572,12.034572 0 0 0 12.03515,12.03321 12.034572,12.034572 0 0 0 12.03516,-12.03321 12.034572,12.034572 0 0 0 -12.03516,-12.03515 z M 143.75781,279 c -0.81943,0 -1.48047,0.65908 -1.48047,1.47852 v 3.38086 c 0,0.81942 0.66104,1.48046 1.48047,1.48046 h 38.45703 c 0.81944,0 1.47852,-0.66104 1.47852,-1.48046 v -3.38086 c 0,-0.81944 -0.65908,-1.47852 -1.47852,-1.47852 z m 0,8.45117 c -0.81943,0 -1.48047,0.66104 -1.48047,1.48047 v 3.38086 c 0,0.81944 0.66104,1.47852 1.48047,1.47852 h 70.15235 c 0.81943,0 1.47851,-0.65908 1.47851,-1.47852 v -3.38086 c 0,-0.81943 -0.65908,-1.48047 -1.47851,-1.48047 z m -28.7539,18.625 c -0.8403,0 -1.51758,0.67533 -1.51758,1.51563 v 0.86718 c 0,0.8403 0.67728,1.51758 1.51758,1.51758 h 98.17187 c 0.8403,0 1.51758,-0.67728 1.51758,-1.51758 v -0.86718 c 0,-0.8403 -0.67728,-1.51563 -1.51758,-1.51563 z m 0,6.72461 c -0.8403,0 -1.51758,0.67533 -1.51758,1.51563 v 0.86718 c 0,0.8403 0.67728,1.51758 1.51758,1.51758 h 98.17187 c 0.8403,0 1.51758,-0.67728 1.51758,-1.51758 v -0.86718 c 0,-0.8403 -0.67728,-1.51563 -1.51758,-1.51563 z"
              transform="matrix(0.26458333,0,0,0.26458333,71.491241,70.077286)"
            />
          </motion.g>
          <motion.g
            id="g35425"
            transform="translate(40.326244)"
            style={{
              opacity: scrollYProgress2
            }}
          >
            <rect
              style={{
                fill: '#b3b3b3',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 0.481687,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                paintOrder: 'stroke fill markers'
              }}
              id="rect35421"
              width="36.352348"
              height="18.259254"
              x="96.441269"
              y="139.48448"
              ry="2.4497716"
            />
            <path
              id="path35423"
              style={{
                fill: '#808080',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 1.06164,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                paintOrder: 'stroke fill markers'
              }}
              d="m 123.37695,274.36133 a 12.034572,12.034572 0 0 0 -12.03515,12.03515 12.034572,12.034572 0 0 0 12.03515,12.03321 12.034572,12.034572 0 0 0 12.03516,-12.03321 12.034572,12.034572 0 0 0 -12.03516,-12.03515 z M 143.75781,279 c -0.81943,0 -1.48047,0.65908 -1.48047,1.47852 v 3.38086 c 0,0.81942 0.66104,1.48046 1.48047,1.48046 h 38.45703 c 0.81944,0 1.47852,-0.66104 1.47852,-1.48046 v -3.38086 c 0,-0.81944 -0.65908,-1.47852 -1.47852,-1.47852 z m 0,8.45117 c -0.81943,0 -1.48047,0.66104 -1.48047,1.48047 v 3.38086 c 0,0.81944 0.66104,1.47852 1.48047,1.47852 h 70.15235 c 0.81943,0 1.47851,-0.65908 1.47851,-1.47852 v -3.38086 c 0,-0.81943 -0.65908,-1.48047 -1.47851,-1.48047 z m -28.7539,18.625 c -0.8403,0 -1.51758,0.67533 -1.51758,1.51563 v 0.86718 c 0,0.8403 0.67728,1.51758 1.51758,1.51758 h 98.17187 c 0.8403,0 1.51758,-0.67728 1.51758,-1.51758 v -0.86718 c 0,-0.8403 -0.67728,-1.51563 -1.51758,-1.51563 z m 0,6.72461 c -0.8403,0 -1.51758,0.67533 -1.51758,1.51563 v 0.86718 c 0,0.8403 0.67728,1.51758 1.51758,1.51758 h 98.17187 c 0.8403,0 1.51758,-0.67728 1.51758,-1.51758 v -0.86718 c 0,-0.8403 -0.67728,-1.51563 -1.51758,-1.51563 z"
              transform="matrix(0.26458333,0,0,0.26458333,71.491241,70.077286)"
            />
          </motion.g>
          <motion.g
            id="g35419"
            style={{
              opacity: scrollYProgress3
            }}
          >
            <rect
              style={{
                fill: '#b3b3b3',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 0.481687,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                paintOrder: 'stroke fill markers'
              }}
              id="rect2074"
              width="36.352348"
              height="18.259254"
              x="96.441269"
              y="139.48448"
              ry="2.4497716"
            />
            <path
              id="path2098"
              style={{
                fill: '#808080',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 1.06164,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                paintOrder: 'stroke fill markers'
              }}
              d="m 123.37695,274.36133 a 12.034572,12.034572 0 0 0 -12.03515,12.03515 12.034572,12.034572 0 0 0 12.03515,12.03321 12.034572,12.034572 0 0 0 12.03516,-12.03321 12.034572,12.034572 0 0 0 -12.03516,-12.03515 z M 143.75781,279 c -0.81943,0 -1.48047,0.65908 -1.48047,1.47852 v 3.38086 c 0,0.81942 0.66104,1.48046 1.48047,1.48046 h 38.45703 c 0.81944,0 1.47852,-0.66104 1.47852,-1.48046 v -3.38086 c 0,-0.81944 -0.65908,-1.47852 -1.47852,-1.47852 z m 0,8.45117 c -0.81943,0 -1.48047,0.66104 -1.48047,1.48047 v 3.38086 c 0,0.81944 0.66104,1.47852 1.48047,1.47852 h 70.15235 c 0.81943,0 1.47851,-0.65908 1.47851,-1.47852 v -3.38086 c 0,-0.81943 -0.65908,-1.48047 -1.47851,-1.48047 z m -28.7539,18.625 c -0.8403,0 -1.51758,0.67533 -1.51758,1.51563 v 0.86718 c 0,0.8403 0.67728,1.51758 1.51758,1.51758 h 98.17187 c 0.8403,0 1.51758,-0.67728 1.51758,-1.51758 v -0.86718 c 0,-0.8403 -0.67728,-1.51563 -1.51758,-1.51563 z m 0,6.72461 c -0.8403,0 -1.51758,0.67533 -1.51758,1.51563 v 0.86718 c 0,0.8403 0.67728,1.51758 1.51758,1.51758 h 98.17187 c 0.8403,0 1.51758,-0.67728 1.51758,-1.51758 v -0.86718 c 0,-0.8403 -0.67728,-1.51563 -1.51758,-1.51563 z"
              transform="matrix(0.26458333,0,0,0.26458333,71.491241,70.077286)"
            />
          </motion.g>
        </g>
        <g id="layer2Hands">
          <g id="g54334" transform="translate(119.30258,26.910784)">
            <path
              fill="#111"
              d="m -113.0092,123.16363 c -0.18631,0.002 -0.36701,0.0358 -0.53849,0.11831 -1.74327,0.83937 -1.85839,1.94237 -2.6639,2.66695 -3.18634,2.87864 -3.64777,6.3664 -2.56292,19.36627 0.30606,3.66714 0.7974,7.29753 1.09227,8.06716 0.568,1.48266 3.21133,3.0392 5.16054,3.0392 h 1.16774 c 1.26273,0.82558 2.12413,0.62362 3.1514,0.0581 l 1.5094,-0.62518 c 1.72484,-0.71445 3.24475,-3.24599 2.85155,-4.74953 -0.14604,-0.55889 0.0606,-1.79639 0.45894,-2.74956 0.51903,-1.24238 0.58614,-2.2127 0.23763,-3.42778 -0.36442,-1.27072 -0.29377,-1.96954 0.28047,-2.78934 0.86497,-1.2349 1.02068,-4.05214 0.26618,-4.80663 -0.31727,-0.31728 -0.29375,-1.30525 0.0632,-2.71183 0.46744,-1.84171 0.41474,-2.43486 -0.31208,-3.54404 -0.98053,-1.4965 -2.76729,-2.3304 -4.9943,-2.3304 -3.23072,-0.11802 -0.2117,-4.13132 -3.30641,-5.19419 -0.0438,-0.0119 -0.0813,-0.0442 -0.12646,-0.05 -0.56709,-0.0669 -1.17614,-0.34326 -1.7348,-0.33758 z m -0.45486,4.08355 c 0.4701,-0.0381 0.67621,0.51272 1.14939,2.67205 0.29599,1.35075 0.48202,1.43598 3.13915,1.43598 1.87167,0 3.10127,0.27628 3.64501,0.81998 1.76097,1.76096 0.63842,2.79052 -3.1157,2.85562 -4.20645,0.073 -5.98458,0.45049 -5.98458,1.27076 0,1.02246 1.23716,1.31971 5.49403,1.31971 4.08024,0 4.71413,0.35238 4.21409,2.34468 -0.4088,1.62885 -1.85287,2.06975 -6.44455,1.96936 -3.35249,-0.0738 -3.78574,0.0256 -3.78574,0.87301 0,1.20804 1.38809,1.58418 5.87443,1.59405 l 3.52467,0.008 v 1.54815 c 0,2.12891 -1.45454,2.79132 -5.5542,2.53029 -2.88956,-0.18393 -3.32273,-0.0938 -3.32273,0.69556 0,1.30705 0.59923,1.52281 4.41908,1.58793 2.9296,0.0501 3.4135,0.19224 3.4135,1.00661 0,0.52195 -0.45519,1.19277 -1.01068,1.49003 -1.41024,0.75481 -5.39389,0.67516 -6.49452,-0.12952 -0.73123,-0.53472 -1.07749,-2.24916 -1.71134,-8.4853 -0.43691,-4.29837 -0.67238,-9.06371 -0.52319,-10.58929 0.2804,-2.8685 1.77293,-6.4062 2.85461,-6.76683 0.0795,-0.0266 0.15216,-0.0442 0.21927,-0.05 z"
              id="path53659"
            />
            <path
              fill="#bbb"
              d="m -113.47532,127.22247 c -0.7406,0.0294 -1.83225,1.80443 -2.52825,4.23347 -0.37212,1.29872 -0.5107,2.14931 -0.54766,3.3625 -0.10855,3.56345 0.80936,13.83952 1.48491,16.62588 0.24594,1.01432 0.52733,1.50731 0.99643,1.74499 0.43967,0.22284 1.33731,0.4183 2.30489,0.50178 0.43838,0.0377 2.02799,-0.0178 2.4691,-0.0866 0.99318,-0.15453 1.51446,-0.36142 1.91022,-0.75878 0.6042,-0.60671 0.74281,-1.43667 0.28964,-1.73583 -0.36083,-0.23819 -1.05776,-0.32218 -3.05348,-0.36816 -0.64731,-0.0158 -1.528,-0.0478 -1.95713,-0.0734 -2.03727,-0.12158 -2.53674,-0.41579 -2.54049,-1.49614 -0.002,-0.81552 0.36934,-0.92085 2.78934,-0.7904 2.30151,0.12394 3.34446,0.0912 4.22736,-0.13262 0.96327,-0.24417 1.48469,-0.68406 1.73784,-1.46658 0.078,-0.24091 0.0969,-0.45427 0.11624,-1.3299 l 0.0225,-1.0423 -1.60528,-0.0306 c -0.88307,-0.0177 -2.08556,-0.0306 -2.67205,-0.0306 -1.70759,0 -3.06785,-0.11506 -3.85204,-0.32635 -0.90078,-0.24273 -1.30151,-0.64261 -1.29421,-1.28911 0.006,-0.44979 0.18394,-0.67227 0.63334,-0.78733 0.15157,-0.0387 1.14743,-0.0665 3.28703,-0.0908 3.23979,-0.0367 3.60109,-0.0588 4.45377,-0.27843 0.79599,-0.20492 1.3885,-0.61177 1.65422,-1.13614 0.1861,-0.36748 0.32001,-0.95351 0.32534,-1.42271 0.004,-0.36189 -0.01,-0.44026 -0.10914,-0.61295 -0.1346,-0.23513 -0.43612,-0.44758 -0.77715,-0.54664 -0.57665,-0.16755 -1.00468,-0.20284 -3.03206,-0.24784 -3.40764,-0.0756 -4.4427,-0.15907 -5.10749,-0.41202 -0.47764,-0.18176 -0.70216,-0.38954 -0.77918,-0.72207 -0.1346,-0.58086 0.27846,-0.9167 1.43393,-1.1657 0.85716,-0.18473 1.76604,-0.25757 4.75258,-0.37735 1.14021,-0.0458 1.81706,-0.12137 2.32938,-0.2611 0.66335,-0.18098 1.15426,-0.49586 1.29931,-0.83322 0.15335,-0.35682 0.0178,-0.78874 -0.41713,-1.33297 -0.16381,-0.20477 -0.4094,-0.44985 -0.54563,-0.54359 -0.614,-0.42288 -1.71771,-0.62823 -3.37474,-0.62926 -1.06099,-5.2e-4 -2.03818,-0.0707 -2.32326,-0.16617 -0.29611,-0.0993 -0.50245,-0.26092 -0.61701,-0.48548 -0.0521,-0.10203 -0.1948,-0.60462 -0.31719,-1.11674 -0.39241,-1.64317 -0.53482,-2.05827 -0.77305,-2.24576 -0.0894,-0.0703 -0.18788,-0.10104 -0.29372,-0.0969 z"
              id="path53775"
            />
          </g>
          <g id="g54330" transform="translate(134.11555,26.170136)">
            <path
              fill="#111"
              d="m 41.626451,123.51094 c -0.558673,-0.006 -1.168731,0.27067 -1.735812,0.33758 -0.04522,0.006 -0.08265,0.0381 -0.126463,0.05 -3.094707,1.06286 -0.07569,5.07617 -3.306411,5.19419 -2.227008,0 -4.013771,0.8339 -4.994296,2.33039 -0.726829,1.10919 -0.779515,1.70233 -0.312079,3.54404 0.357058,1.40658 0.380498,2.39456 0.06323,2.71184 -0.754491,0.75449 -0.598789,3.57173 0.26619,4.80663 0.574222,0.8198 0.644882,1.51862 0.280463,2.78934 -0.348514,1.21508 -0.281402,2.1854 0.237625,3.42778 0.398402,0.95317 0.604989,2.19067 0.458941,2.74956 -0.393189,1.50354 1.126718,4.03507 2.851553,4.74952 l 1.509403,0.62518 c 1.027258,0.56557 1.888669,0.76753 3.151393,-0.0581 h 1.16775 c 1.949211,0 4.592521,-1.55654 5.160529,-3.0392 0.294871,-0.76964 0.786219,-4.40002 1.09228,-8.06716 1.084844,-12.99987 0.623406,-16.48763 -2.56293,-19.36627 -0.805508,-0.72458 -0.920623,-1.82758 -2.663894,-2.66695 -0.171482,-0.0825 -0.35125,-0.11653 -0.537472,-0.11831 z m 0.369192,4.08253 v 0.001 c 0.02747,-0.002 0.05527,-0.002 0.08465,0 0.0671,0.006 0.13975,0.0233 0.219276,0.05 1.081669,0.36063 2.5742,3.89832 2.854605,6.76682 0.149186,1.52559 -0.0863,6.29092 -0.523189,10.58929 -0.633865,6.23614 -0.980091,7.95058 -1.711336,8.4853 -1.100635,0.80474 -5.084289,0.88439 -6.494518,0.12953 -0.555498,-0.29726 -1.01069,-0.96809 -1.01069,-1.49004 0,-0.81437 0.483902,-0.95647 3.413496,-1.0066 3.819858,-0.0651 4.419089,-0.28089 4.419089,-1.58794 0,-0.78928 -0.433176,-0.87948 -3.32273,-0.69555 -4.099663,0.26102 -5.5542,-0.40139 -5.5542,-2.53029 v -1.54816 l 3.524663,-0.008 c 4.486346,-0.01 5.874438,-0.38602 5.874438,-1.59405 0,-0.84735 -0.433253,-0.94682 -3.785748,-0.87301 -4.591677,0.10046 -6.035744,-0.3405 -6.444547,-1.96936 -0.500044,-1.9923 0.133848,-2.34468 4.214091,-2.34468 4.256865,0 5.494033,-0.29724 5.494033,-1.31971 0,-0.82028 -1.778135,-1.19773 -5.984587,-1.27076 -3.754117,-0.0651 -4.876673,-1.09466 -3.115693,-2.85563 0.54374,-0.54369 1.773335,-0.81997 3.645003,-0.81997 2.657126,0 2.843175,-0.0853 3.139154,-1.43598 0.443622,-2.02438 0.653018,-2.635 1.064742,-2.67205 z"
              id="path53604"
            />
            <path
              fill="#bbb"
              d="m 42.092529,127.569 c -0.105804,-0.004 -0.204393,0.0266 -0.293721,0.0969 -0.238242,0.18729 -0.381672,0.60259 -0.774084,2.24576 -0.122301,0.51212 -0.264136,1.01477 -0.316156,1.11674 -0.114564,0.22455 -0.320916,0.38627 -0.617024,0.48548 -0.285073,0.0955 -1.26328,0.16558 -2.324277,0.16617 -1.65703,0.001 -2.759724,0.20638 -3.373718,0.62925 -0.136234,0.0937 -0.381807,0.33882 -0.545635,0.5436 -0.435443,0.54423 -0.570547,0.97615 -0.417121,1.33297 0.145056,0.33736 0.635958,0.65218 1.299311,0.83322 0.512313,0.13973 1.188141,0.21535 2.328355,0.2611 2.986534,0.11979 3.895431,0.19262 4.752583,0.37734 1.155462,0.24901 1.568474,0.58485 1.433938,1.16571 -0.07703,0.33253 -0.301551,0.54028 -0.779182,0.72207 -0.664802,0.25301 -1.699858,0.33649 -5.107498,0.41202 -2.02738,0.045 -2.455415,0.0803 -3.032067,0.24784 -0.341029,0.0991 -0.642501,0.31151 -0.777136,0.54664 -0.09888,0.17269 -0.113284,0.25105 -0.10912,0.61295 0.0053,0.46919 0.140145,1.05522 0.326358,1.4227 0.265721,0.52438 0.858221,0.93123 1.654226,1.13614 0.852686,0.21954 1.213972,0.24168 4.453765,0.27843 2.139606,0.0243 3.13449,0.0521 3.286014,0.0908 0.449498,0.11506 0.629269,0.33754 0.634355,0.78734 0.0073,0.6465 -0.394454,1.04638 -1.295234,1.28911 -0.78418,0.21131 -2.144453,0.32635 -3.852037,0.32635 -0.586478,0 -1.787959,0.0138 -2.671032,0.0306 l -1.606296,0.0306 0.02347,1.04229 c 0.01934,0.87564 0.03732,1.089 0.115236,1.32991 0.253143,0.78252 0.775594,1.22241 1.738876,1.46658 0.882886,0.2238 1.92481,0.25662 4.226333,0.13262 2.419987,-0.13045 2.792034,-0.0251 2.789335,0.79039 -0.0038,1.08035 -0.502213,1.37453 -2.539471,1.49614 -0.429146,0.0257 -1.309817,0.0584 -1.957123,0.0734 -1.995746,0.046 -2.692669,0.13006 -3.053484,0.36817 -0.453173,0.29915 -0.314569,1.12912 0.289642,1.73583 0.395763,0.39736 0.91704,0.60427 1.910212,0.75878 0.441108,0.0687 2.030727,0.12433 2.469102,0.0866 0.967584,-0.0835 1.864201,-0.27894 2.303881,-0.50178 0.469087,-0.23768 0.750477,-0.73067 0.99641,-1.74499 0.675566,-2.78635 1.593481,-13.06243 1.484927,-16.62588 -0.03696,-1.21319 -0.175549,-2.06377 -0.54767,-3.3625 -0.695997,-2.42904 -1.786633,-4.20414 -2.527231,-4.23347 z"
              id="path53830"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
export default LayoutSVG;
