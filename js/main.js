let characterElems = document.querySelectorAll(".character");

let animationOutputElems = document.querySelectorAll(".canvas[data-input-from]");
let animationInputElems = document.querySelectorAll(".canvas[data-output-to]");
let animationOutputElemsCount = animationOutputElems.length;

let demoAnimationHistory = JSON.parse('[[-17.951171875,58.42773437499999],[-17.751953125,58.42773437499999],[-17.646484375,58.42773437499999],[-17.30078125,58.42773437499999],[-17.12890625,58.42773437499999],[-16.826171875,58.42773437499999],[-16.623046875,58.42773437499999],[-16.521484375,58.42773437499999],[-16.28125,58.42773437499999],[-16.216796875,58.42773437499999],[-15.9140625,58.42773437499999],[-15.609375,58.42773437499999],[-15.353515625,58.212890625],[-15.3046875,58.170572916666664],[-14.7421875,58.170572916666664],[-14.482421875000002,58.170572916666664],[-14.328125,58.040364583333336],[-14.179687499999998,57.91341145833333],[-13.91015625,57.91341145833333],[-13.662109375,57.91341145833333],[-13.3828125,57.75716145833333],[-13.14453125,57.62369791666667],[-12.855468749999998,57.4609375],[-12.626953125000002,57.33072916666667],[-12.333984375,57.33072916666667],[-12.109375,57.33072916666667],[-11.806640625,57.161458333333336],[-11.591796875,57.041015625],[-11.2890625,56.871744791666664],[-11.07421875,56.751302083333336],[-10.591796875,56.54947916666667],[-10.302734375,56.42578124999999],[-9.951171875,56.227213541666664],[-9.78515625,56.13281249999999],[-9.439453125,55.93749999999999],[-9.267578125,55.83984374999999],[-9.048828125,55.654296875],[-8.962890625,55.579427083333336],[-8.5625,55.579427083333336],[-8.4453125,55.579427083333336],[-8.20703125,55.37760416666667],[-8.140625,55.31901041666667],[-7.718750000000001,55.31901041666667],[-7.623046875,55.31901041666667],[-7.337890625,55.078125],[-7.320312499999999,55.061848958333336],[-7.025390625,54.81445312499999],[-7.015625,54.80468750000001],[-6.501953125,54.518229166666664],[-6.343749999999999,54.384765625],[-6.193359375,54.2578125],[-5.673828125,53.968098958333336],[-5.251953125,53.78906249999999],[-4.90234375,53.64257812499999],[-4.609375,53.31380208333333],[-4.384765625,53.059895833333336],[-3.9355468749999996,52.87109375],[-3.61328125,52.734375],[-3.310546875,52.565104166666664],[-3.095703125,52.44466145833333],[-2.603515625,52.236328125],[-2.32421875,52.11914062500001],[-1.9921874999999998,51.93359374999999],[-1.806640625,51.829427083333336],[-1.462890625,51.637369791666664],[-1.2890625,51.539713541666664],[-0.93359375,51.341145833333336],[-0.771484375,51.24999999999999],[-0.390625,51.24999999999999],[-0.25390625,51.24999999999999],[-0.0234375,51.05468749999999],[0.05078125,50.989583333333336],[0.462890625,50.989583333333336],[0.568359375,50.989583333333336],[0.87109375,50.989583333333336],[1.125,50.77473958333333],[1.173828125,50.732421875],[1.640625,50.732421875],[1.69140625,50.732421875],[1.986328125,50.48502604166667],[2.146484375,50.475260416666664],[2.30078125,50.475260416666664],[2.4609375,50.33854166666667],[2.60546875,50.21484375000001],[2.76953125,50.21484375000001],[2.908203125,50.21484375000001],[3.1894531249999996,50.21484375000001],[3.42578125,50.21484375000001],[3.599609375,50.06835937500001],[3.7304687500000004,49.957682291666664],[3.912109375,49.957682291666664],[4.03515625,49.957682291666664],[4.224609375,49.957682291666664],[4.337890625,49.957682291666664],[4.53125,49.794921875],[4.642578125,49.700520833333336],[4.9765625,49.700520833333336],[5.16015625,49.700520833333336],[5.3671875,49.524739583333336],[5.46484375,49.440104166666664],[5.841796875,49.440104166666664],[5.982421875,49.440104166666664],[6.208984375,49.248046875],[6.287109375,49.1796875],[6.806640625,49.1796875],[7.029296875,48.99088541666667],[7.109375,48.922526041666664],[7.37109375,48.922526041666664],[7.412109375000001,48.922526041666664],[7.8671875,48.922526041666664],[7.9296875,48.922526041666664],[8.2109375,48.684895833333336],[8.232421875,48.66536458333333],[8.724609375,48.66536458333333],[8.75,48.66536458333333],[9.052734375,48.66536458333333],[9.2109375,48.66536458333333],[9.357421875,48.66536458333333],[9.662109375,48.66536458333333],[9.828125,48.525390625],[9.966796875,48.408203125],[10.140625,48.408203125],[10.271484375,48.408203125],[10.5703125,48.408203125],[10.7890625,48.408203125],[11.1015625,48.232421875],[11.306640625,48.115234375],[11.498046875,48.115234375],[11.611328125,48.115234375],[11.955078125,48.115234375],[12.12890625,48.115234375],[12.474609375,47.919921875],[12.646484375,47.822265625],[13.177734375,47.822265625],[13.41796875,47.822265625],[13.802734375,47.607421875],[13.935546874999998,47.532552083333336],[14.249999999999998,47.532552083333336],[14.433593750000002,47.532552083333336],[14.861328125,47.291666666666664],[14.951171875,47.239583333333336],[15.605468750000002,47.239583333333336],[15.72265625,47.239583333333336],[16.158203125,47.239583333333336],[16.240234375,47.239583333333336],[16.7578125,47.239583333333336],[17.263671875,47.239583333333336],[17.53515625,47.093098958333336],[17.794921875,46.946614583333336],[18.568359375,46.946614583333336],[18.826171875,46.946614583333336],[19.080078125,46.946614583333336],[19.373046875,46.946614583333336],[19.59765625,46.946614583333336],[19.888671875,46.946614583333336],[20.115234375,46.946614583333336],[20.421875,46.946614583333336],[20.6328125,46.946614583333336],[21.40625,46.946614583333336],[21.708984375,46.946614583333336],[21.923828125,46.946614583333336],[22.263671875,46.946614583333336],[22.44140625,46.946614583333336],[22.796875,46.946614583333336],[22.958984375,46.946614583333336],[23.333984375,46.946614583333336],[23.4765625,46.946614583333336],[23.986328125,46.946614583333336],[24.5625,46.946614583333336],[24.7578125,46.946614583333336],[25.179687499999996,46.946614583333336],[25.277343749999996,46.946614583333336],[25.919921875,46.946614583333336],[26.048828125,46.946614583333336],[26.72265625,46.946614583333336],[26.822265625000004,46.946614583333336],[27.314453125,46.946614583333336],[28.017578124999996,46.946614583333336],[28.107421875,46.946614583333336],[28.865234375,46.946614583333336],[29.150390625,46.946614583333336],[29.396484375,46.946614583333336],[30.169921875,46.946614583333336],[30.941406249999996,46.946614583333336],[31.232421875,46.946614583333336],[31.458984375,46.946614583333336],[31.912109374999996,46.946614583333336],[32.23046875,46.946614583333336],[32.541015625,46.946614583333336],[32.748046875,46.946614583333336],[33.07421875,47.125651041666664],[33.265625,47.229817708333336],[33.603515625,47.415364583333336],[33.783203125,47.513020833333336],[34.5546875,47.83203125],[34.927734375,47.83203125],[35.072265625,47.83203125],[35.30078125,48.020833333333336],[35.376953125,48.082682291666664],[35.77734375,48.304036458333336],[35.89453125,48.369140625],[36.314453125,48.60026041666667],[36.412109375,48.65234375],[36.666015625,48.65234375],[36.71484375,48.65234375],[37.17578125,48.90625],[37.232421875,48.935546875],[37.521484375,49.176432291666664],[37.7890625,49.329427083333336],[38.0546875,49.475911458333336],[38.208984375,49.602864583333336],[38.357421875,49.7265625],[38.623046875,49.873046875],[38.875,50.013020833333336],[39.1796875,50.013020833333336],[39.34375,50.14973958333333],[39.484375,50.266927083333336],[39.65625,50.41015625000001],[39.7890625,50.520833333333336],[39.97265625,50.673828125],[40.09375,50.77473958333333],[40.3984375,51.02864583333333],[40.58203125,51.02864583333333],[40.703125,51.02864583333333],[41.373046875,51.442057291666664],[41.521484375,51.56575520833333],[41.826171875,51.819661458333336],[42.205078125,51.819661458333336],[42.34375,51.819661458333336],[43.06640625,52.3046875],[43.412109375,52.565104166666664],[43.46875,52.610677083333336],[43.904296875,52.85156250000001],[44.447265625,53.151041666666664],[44.50390625,53.18033854166667],[44.796875,53.42447916666667],[45.064453125,53.57421875],[45.328125,53.720703125],[45.6328125,53.97460937500001],[45.912109375,54.127604166666664],[46.150390625,54.2578125],[46.4375,54.417317708333336],[46.66796875,54.54427083333333],[46.83984375,54.54427083333333],[46.97265625,54.54427083333333],[47.15234375,54.69401041666667],[47.27734375,54.798177083333336],[47.5859375,54.967447916666664],[47.794921875,55.08138020833333],[47.9921875,55.24414062500001],[48.099609375,55.33203125],[48.296875,55.494791666666664],[48.404296875,55.582682291666664],[48.609375,55.582682291666664],[48.70703125,55.582682291666664],[48.921875,55.76171875],[49.009765625,55.833333333333336],[49.40234375,56.05143229166667],[49.52734375,56.119791666666664],[49.767578125,56.31835937500001],[49.830078125,56.370442708333336],[50.072265625,56.370442708333336],[50.134765625,56.370442708333336],[50.400390625,56.591796875],[50.439453125,56.624348958333336],[50.95703124999999,56.907552083333336],[51.41015625000001,57.28190104166667],[51.56640625,57.412109375],[51.720703125,57.53906250000001],[51.87109375,57.66276041666667],[52.14257812500001,57.66276041666667],[52.388671875,57.66276041666667],[52.55664062499999,57.802734375],[52.69335937500001,57.91666666666667],[52.99804687500001,58.170572916666664],[53.517578125,58.45703125],[53.685546875,58.45703125],[53.818359375,58.45703125],[54.00390625,58.610026041666664],[54.123046875,58.707682291666664],[54.642578125,58.994140625],[54.947265625,59.24804687500001],[55.15820312500001,59.24804687500001],[55.251953125,59.24804687500001],[55.47265625,59.24804687500001],[55.556640625,59.24804687500001],[55.79296875000001,59.44335937500001],[55.861328125,59.498697916666664],[56.166015625,59.498697916666664],[56.396484375,59.690755208333336],[56.470703125,59.752604166666664],[56.923828125,59.752604166666664],[56.98828124999999,59.752604166666664],[57.24609375000001,59.752604166666664],[57.56640625,59.752604166666664],[57.595703125,59.752604166666664],[58.095703125,60.02929687500001],[58.267578125,60.03906249999999],[58.41796875000001,60.03906249999999],[58.72265625000001,60.29296875],[59.2421875,60.29296875],[59.412109375,60.29296875],[59.546875,60.29296875],[59.72460937500001,60.439453125],[59.849609375,60.54361979166667],[60.033203125,60.54361979166667],[60.15234375,60.54361979166667],[60.337890625,60.54361979166667],[60.45507812499999,60.54361979166667],[60.78125,60.54361979166667],[60.97265625,60.54361979166667],[61.177734375,60.71289062500001],[61.27734375,60.79427083333333],[61.48828125,60.79427083333333],[61.58007812500001,60.79427083333333],[61.673828125,60.79427083333333],[61.71093749999999,60.79427083333333],[61.9375,60.98307291666667],[62.015625,61.048177083333336],[62.251953125,61.048177083333336],[62.3203125,61.048177083333336],[62.57812499999999,61.048177083333336],[62.625,61.048177083333336],[62.892578125,61.048177083333336],[62.9296875,61.048177083333336],[63.20312500000001,61.048177083333336],[63.234375,61.048177083333336],[63.52734375,61.292317708333336],[63.5390625,61.302083333333336],[63.841796875,61.302083333333336],[64,61.42903645833333],[64.150390625,61.55273437499999],[64.41796875,61.55273437499999],[64.66796875,61.55273437499999],[64.830078125,61.55273437499999],[64.97265625,61.55273437499999],[65.1484375,61.55273437499999],[65.27734375,61.55273437499999],[65.794921875,61.839192708333336],[65.974609375,61.839192708333336],[66.09765625,61.839192708333336],[66.427734375,61.839192708333336],[66.615234375,61.839192708333336],[66.81640625,62.00520833333333],[66.919921875,62.08984374999999],[67.267578125,62.08984374999999],[67.4375,62.08984374999999],[67.7890625,62.08984374999999],[67.955078125,62.08984374999999],[68.341796875,62.08984374999999],[68.47265625,62.08984374999999],[68.876953125,62.314453125],[68.990234375,62.376302083333336],[69.228515625,62.376302083333336],[69.29296875,62.376302083333336],[69.724609375,62.376302083333336],[69.810546875,62.376302083333336],[70.24609375,62.376302083333336],[70.328125,62.376302083333336],[70.60546875,62.376302083333336],[70.630859375,62.376302083333336],[71.123046875,62.376302083333336],[71.1484375,62.376302083333336],[71.658203125,62.376302083333336],[72.0546875,62.376302083333336],[72.439453125,62.376302083333336],[72.958984375,62.376302083333336],[73.244140625,62.376302083333336],[73.4765625,62.376302083333336],[73.7578125,62.376302083333336],[73.9921875,62.376302083333336],[74.2890625,62.376302083333336],[74.509765625,62.376302083333336],[74.693359375,62.376302083333336],[74.8125,62.376302083333336],[75.130859375,62.376302083333336],[75.330078125,62.376302083333336],[75.529296875,62.376302083333336],[75.634765625,62.376302083333336],[75.841796875,62.376302083333336],[75.939453125,62.376302083333336],[76.1484375,62.376302083333336],[76.244140625,62.376302083333336],[76.46875,62.376302083333336],[76.546875,62.376302083333336],[76.7734375,62.376302083333336],[76.8515625,62.376302083333336],[77.091796875,62.174479166666664],[77.15625,62.119140625],[77.412109375,62.119140625],[77.4609375,62.119140625],[77.732421875,61.891276041666664],[77.763671875,61.86197916666667],[78.04296875,61.86197916666667],[78.068359375,61.86197916666667],[78.359375,61.61783854166667],[78.5234375,61.604817708333336],[78.677734375,61.604817708333336],[78.8359375,61.47135416666667],[78.98046875,61.34765625000001],[79.14453125,61.34765625000001],[79.28515625,61.34765625000001],[79.453125,61.204427083333336],[79.587890625,61.09049479166667],[79.75,61.09049479166667],[79.888671875,61.09049479166667],[80.0625,60.94401041666667],[80.193359375,60.83333333333333],[80.37890625,60.83333333333333],[80.498046875,60.83333333333333],[80.828125,60.64778645833333],[81.015625,60.54036458333333],[81.21484375,60.54036458333333],[81.318359375,60.54036458333333],[81.525390625,60.364583333333336],[81.623046875,60.279947916666664],[81.84375,60.279947916666664],[81.927734375,60.279947916666664],[82.158203125,60.084635416666664],[82.23046875,60.022786458333336],[82.470703125,60.022786458333336],[82.53515625,60.022786458333336],[82.76171875,59.830729166666664],[82.837890625,59.765625],[83.08984375,59.554036458333336],[83.142578125,59.508463541666664],[83.59375,59.508463541666664],[83.93359375,59.27734375],[83.962890625,59.251302083333336],[84.44921875,59.251302083333336],[84.482421875,59.251302083333336],[84.787109375,58.994140625],[85.302734375,58.704427083333336],[85.580078125,58.54817708333333],[85.82421875,58.411458333333336],[85.9921875,58.268229166666664],[86.12890625,58.15104166666667],[86.423828125,58.15104166666667],[86.646484375,58.15104166666667],[87.1640625,57.861328125],[87.474609375,57.68554687500001],[87.681640625,57.568359375],[87.869140625,57.408854166666664],[87.984375,57.311197916666664],[88.330078125,57.115885416666664],[88.501953125,57.018229166666664],[88.849609375,56.822916666666664],[89.01953125,56.725260416666664],[89.236328125,56.54296875],[89.32421875,56.468098958333336],[89.697265625,56.468098958333336],[89.841796875,56.468098958333336],[90.080078125,56.266276041666664],[90.14453125,56.2109375],[90.390625,56.00260416666667],[90.44921875,55.95052083333333],[90.708984375,55.73242187500001],[90.75390625,55.69335937499999],[90.87109375,55.69335937499999],[90.884765625,55.69335937499999],[91.1640625,55.458984375],[91.3359375,55.3125],[91.49609375,55.17578125],[91.65234375,55.17578125],[91.80078125,55.17578125],[92.072265625,55.02278645833333],[92.318359375,54.8828125],[92.48046875,54.74609375],[92.623046875,54.625651041666664],[93.142578125,54.3359375],[93.302734375,54.19921875],[93.4453125,54.078776041666664],[93.623046875,53.929036458333336],[93.75,53.821614583333336],[94.26953125,53.531901041666664],[94.44140625,53.385416666666664],[94.572265625,53.27473958333333],[94.91015625,53.0859375],[95.08984375,52.98502604166667],[95.298828125,52.809244791666664],[95.39453125,52.72786458333333],[95.9140625,52.43815104166667],[96.14453125,52.24283854166667],[96.21875,52.17773437499999],[96.62109375,52.17773437499999],[96.736328125,52.17773437499999],[97.146484375,51.94661458333333],[97.25390625,51.88476562499999],[97.6875,51.64062499999999],[97.771484375,51.59179687499999],[98.244140625,51.328125],[98.291015625,51.29882812499999],[98.767578125,51.03190104166667],[99.287109375,51.00585937499999],[99.326171875,51.00585937499999],[99.814453125,50.732421875]]');

// file inputs
let backgroundImageInputElem = document.querySelector("[name='background-image']");
let characterImageInputElem = document.querySelector("[name='character-image']");

let demoDotsHTML = '<span style="left: 0.048828125%; top: 76.427734375%;"></span><span style="left: 3.2578125%; top: 76.17057291666666%;"></span><span style="left: 6.7109375%; top: 74.87174479166666%;"></span><span style="left: 10.28125%; top: 73.31901041666667%;"></span><span style="left: 14.064453125%; top: 70.87109375%;"></span><span style="left: 17.9765625%; top: 69.0546875%;"></span><span style="left: 22.03515625%; top: 67.95768229166666%;"></span><span style="left: 26.232421875%; top: 66.66536458333333%;"></span><span style="left: 31.177734375%; top: 65.822265625%;"></span><span style="left: 35.53515625%; top: 65.09309895833334%;"></span><span style="left: 40.263671875%; top: 64.94661458333334%;"></span><span style="left: 44.822265625%; top: 64.94661458333334%;"></span><span style="left: 48.169921875%; top: 64.94661458333334%;"></span><span style="left: 53.072265625%; top: 65.83203125%;"></span><span style="left: 56.208984375%; top: 67.60286458333334%;"></span><span style="left: 59.373046875%; top: 69.44205729166666%;"></span><span style="left: 63.6328125%; top: 71.974609375%;"></span><span style="left: 66.404296875%; top: 73.58268229166666%;"></span><span style="left: 69.41015625%; top: 75.28190104166667%;"></span><span style="left: 73.861328125%; top: 77.49869791666666%;"></span><span style="left: 77.412109375%; top: 78.29296875%;"></span><span style="left: 80.625%; top: 79.04817708333334%;"></span><span style="left: 84.81640625%; top: 80.00520833333333%;"></span><span style="left: 88.24609375%; top: 80.37630208333334%;"></span><span style="left: 92.2890625%; top: 80.37630208333334%;"></span><span style="left: 95.763671875%; top: 79.86197916666667%;"></span><span style="left: 99.318359375%; top: 78.54036458333333%;"></span>';
let demoCanvasInner = document.querySelector(".canvas.full.demo .canvas-inner");
demoCanvasInner.insertAdjacentHTML("afterbegin", demoDotsHTML);

// // for generating demo dots:
// let demoDotsHTML = "";
// demoAnimationHistory.forEach((coord, index) => {
//   if (index % 7 === 0) {
//     demoDotsHTML += `<span style="left: ${coord[0] + 18}%; top: ${coord[1] + 18}%;"></span>`;
//   }
// });
// demoCanvasInner.insertAdjacentHTML("afterbegin", demoDotsHTML);
// document.addEventListener("click", (e) => e.target.remove());

function init () {
  animationOutputElems.forEach(el => {
    let animationInputElemSelector = `[data-output-to="${el.getAttribute("data-input-from")}"]`;
    el.animationInputElem = document.querySelector(animationInputElemSelector);
    el.isAnimationOutputElem = true;
    el.characterContainerElem = el.querySelector(".character-container");
    el.backgroundElem = el.querySelector(".canvas-inner");
    el.characterElem = el.querySelector(".character-inner");

    el.animationHistory = [];
    el.animationIndex = 0;
  });

  animationInputElems.forEach(el => {
    let animationOutputElemSelector = `[data-input-from="${el.getAttribute("data-output-to")}"]`;
    el.animationOutputElem = document.querySelector(animationOutputElemSelector);
    el.isAnimationInputElem = true;
  });

  characterElems.forEach(el => {
    el.animationContainerElem = el.closest(".canvas");
    el.animationContainerElem.characterElem = el;
    
    if (el.animationContainerElem.isAnimationInputElem) {
      el.animationOutputElem = el.animationContainerElem.animationOutputElem;
    } else {
      el.animationInputElem = el.animationContainerElem.animationInputElem;
    }

    el.backgroundElem = el.animationContainerElem.querySelector(".canvas-inner");
    el.positionX = 0;
    el.positionY = 0;
    el.throttleMovementIndex = 0;
  });

  let demoAnimationOutputElem = document.querySelector('[data-input-from="demo"]');
  demoAnimationOutputElem.animationHistory = demoAnimationHistory;
}

init();


interact('.draggable').draggable({
  listeners: {
    start (event) {
      let playElem = event.target.closest(".play");
      if (playElem) {
        playElem.classList.add("drag-started");
      }
    },
    move (event) {
      let characterElem = event.currentTarget;
      let backgroundElem = characterElem.backgroundElem;

      characterElem.positionX += event.dx;
      characterElem.positionY += event.dy;

      characterElem.style.transform = `translate(${characterElem.positionX}px, ${characterElem.positionY}px)`;


      let characterRect = interact.getElementRect(characterElem);
      let backgroundRect = interact.getElementRect(backgroundElem);

      if (doesCollide(characterRect, backgroundRect)) {
        // don't record every movement to save space
        let throttleMovementIndex = characterElem.throttleMovementIndex;

        if (throttleMovementIndex % 2 === 0) {
          // make character movement relative to background
          let leftPercentage = ((characterRect.left - backgroundRect.left) / backgroundRect.width) * 100;
          let topPercentage = ((characterRect.top - backgroundRect.top) / backgroundRect.height) * 100;
          characterElem.animationOutputElem.animationHistory.push([leftPercentage, topPercentage]);
        }

        throttleMovementIndex++;
      }
    },
  }
})





function gameLoop() {

  // loop through the animation output elements
  for (let i = 0; i < animationOutputElemsCount; i++) {
    let animationOutputElem = animationOutputElems[i];

    if (animationOutputElem.animationHistory.length !== 0) {
      if (animationOutputElem.animationIndex === animationOutputElem.animationHistory.length) {
        animationOutputElem.animationIndex = 0;
      }

      let currentTranslation = animationOutputElem.animationHistory[animationOutputElem.animationIndex];
      animationOutputElem.characterElem.classList.remove("hide");

      animationOutputElem.characterContainerElem.style.transform = `translate(${currentTranslation[0]}%, ${currentTranslation[1]}%)`;
      animationOutputElem.animationIndex++;
    }

  }

  window.requestAnimationFrame(gameLoop);
}

gameLoop();


let userAnimationPlayContainer = document.querySelector('[data-has-character][data-has-background]');
let characterBackgroundImageStylesheet = document.querySelector("#character-background-image");
let backgroundBackgroundImageStylesheet = document.querySelector("#background-background-image");
let characterBackgroundImageElem = document.querySelector(".user-character-image");
let backgroundBackgroundImageElem = document.querySelector(".user-background-image");
let customFileInputs = document.querySelectorAll(".custom-file-input");
customFileInputs.forEach((customFileInput) => {
  customFileInput.addEventListener("change", (event) => {
    let file = customFileInput.files[0];

    if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
      let reader = new FileReader();

      reader.addEventListener("load", function () {
        customFileInput.nextElementSibling.innerText = file.name;

        if (customFileInput.id === "backgroundImage") {
          backgroundBackgroundImageStylesheet.innerHTML = ".user-background-image {background-image: url(" + reader.result + ")}";
          userAnimationPlayContainer.setAttribute("data-has-background", "true");
        }

        if (customFileInput.id === "characterImage") {
          characterBackgroundImageStylesheet.innerHTML = ".user-character-image {background-image: url(" + reader.result + ")}";
          userAnimationPlayContainer.setAttribute("data-has-character", "true");
        }

        if (userAnimationPlayContainer.getAttribute("data-has-background") === "true" && userAnimationPlayContainer.getAttribute("data-has-character") === "true") {
          userAnimationPlayContainer.classList.remove("hide-user-animations");
        }
      }, false);

      reader.readAsDataURL(file);
    }
  });
});


// UTILS

function doesCollide (elemPos1, elemPos2) {
    return elemPos1.left < elemPos2.left + elemPos2.width 
            && elemPos1.left + elemPos1.width > elemPos2.left
            && elemPos1.top < elemPos2.top + elemPos2.height 
            && elemPos1.height + elemPos1.top > elemPos2.top;
}


// clipboard

let clipboard = new ClipboardJS('.copy-code');
clipboard.on('success', function () {
  crostini("Code successfully copied!");
});



// FIXES

// fix firefox bug, see: https://tympanus.net/codrops/2015/09/15/styling-customizing-file-inputs-smart-way/
document.querySelectorAll(".custom-file-input").forEach(inputElem => {
  inputElem.addEventListener("focus", () => { inputElem.classList.add("has-focus") });
  inputElem.addEventListener("blur", () => { inputElem.classList.remove("has-focus") });
});



let baseCSS = `
.canvas {
  position: relative;
  left: 120px;
  max-width: 200px;
}

.canvas-inner {
  width: 100%;
  padding-top: 60%;
  background-position: top left;
  background-size: cover;
  background-repeat: no-repeat;
}

.character-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.character {
  position: absolute;
  top: 42px;
  left: -60px;
  width: 18%;
}

.character-inner {
  width: 100%;
  padding-top: 100%;
  background-position: top left;
  background-size: cover;
  background-repeat: no-repeat;
}

.canvas.full {
  overflow: hidden; /* to hide character when it's out of frame */
  left: 0;
  max-width: 100%;
}

.canvas.full .character {
  top: 0;
  left: 0;
}`;

let baseHTML = `
<div class="canvas full">
  <div class="canvas-inner user-background-image">
    <div class="character-container">
      <div class="character">
        <div class="character-inner user-character-image"></div>
      </div>
    </div>
  </div>
</div>
`;

let userAnimationOutputElem = userAnimationPlayContainer.querySelector('[data-input-from="animate-your-own-images"]');
function generateCode () {
  let animationHistory = userAnimationOutputElem.animationHistory;

  if (backgroundBackgroundImageStylesheet.innerHTML.length === 0) {
    crostini("Upload a background first!" , {type: "error"});
    return;
  }

  if (characterBackgroundImageStylesheet.innerHTML.length === 0) {
    crostini("Upload a character first!" , {type: "error"});
    return;
  }

  if (animationHistory.length === 0) {
    crostini("Drag character to animate first" , {type: "error"});
    return;
  }

  let combinedCSS = "<style>" + baseCSS + backgroundBackgroundImageStylesheet.innerHTML + characterBackgroundImageStylesheet.innerHTML + "</style>";

  let baseJS = `
<script>
let animationElem = document.querySelector('.canvas');
let characterContainerElem = animationElem.querySelector('.character-container');
let animationIndex = 0;
let animationHistory = ${JSON.stringify(animationHistory)};

function gameLoop() {

  if (animationHistory.length !== 0) {
    if (animationIndex === animationHistory.length) {
      animationIndex = 0;
    }

    let currentTranslation = animationHistory[animationIndex];
    characterContainerElem.style.transform = "translate(" + currentTranslation[0] + "%, " + currentTranslation[1] + "%)";
    animationIndex++;
  }

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
</script>
`;

  let outputtedCode = combinedCSS + baseHTML + baseJS;
  return outputtedCode;  
}


let codeContainer = document.querySelector(".code-container");
document.querySelector(".generate-code").addEventListener("click", () => {
  let generatedCode = generateCode();
  if (generatedCode) {
    codeContainer.querySelector(".code").value = generatedCode;
    codeContainer.classList.remove("hide");
  }
});


let userAnimationInputElem = userAnimationPlayContainer.querySelector('[data-output-to="animate-your-own-images"]');
document.querySelector(".reset-animation").addEventListener("click", () => {
  // clear generated code
  codeContainer.querySelector(".code").value = "";
  // hide generated code
  codeContainer.classList.add("hide");
  // erase history on user canvas element
  userAnimationOutputElem.animationHistory = [];
  // remove drag-started class
  userAnimationOutputElem.closest(".play").classList.remove("drag-started");
  // reset animation index
  userAnimationOutputElem.animationIndex = 0;
  // reset character position
  let characterElem = userAnimationInputElem.querySelector(".character");
  characterElem.style.transform = `translate(0px, 0px)`;
  // reset relative position data on character elem
  characterElem.positionX = 0;
  characterElem.positionY = 0;
  // success message!
  crostini("Animation successfully reset");
});















