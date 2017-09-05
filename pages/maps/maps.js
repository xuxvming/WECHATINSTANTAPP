Page({

  /**
   * 页面的初始数据
   */
  data: {
//     coordinates: [
//       {building: "1937 Reading Room", latitude: 53.343851, longitude: -6.257673},
//       {building: "Anatomy Building", latitude: 53.343345, longitude: -6.251688},
//       {building: "Aras An Phiarsaigh", latitude: 53.344883, longitude: -6.254941},
//       {building: "Arts Building", latitude: 53.343247, longitude: -6.256556},
//       {
//         building: "Atrium/Buttry/Dinning Hall", latitude: 53.345054, longitude: -6.257508},
//       {
//         building: "Berkeley Library", latitude: 53.343706, longitude: -6.255912 },
//       {
//         building: "Botany ", latitude: 53.343996,longitude: -6.25207},
//       {
//         building: "Botany Bay Tennis Courts", latitude: 53.345097, longitude: -6.256738},
//       {
//         building: "Chemistry Building", latitude: 53.342922, longitude: -6.252275 },
//       {
//         building: "Civil Engineering Building", latitude: 53.344303, longitude: -6.252776},
//       {
//         building: "College Park", latitude: 53.343133, longitude: -6.254252},
//       {
//         building: "East End Development 4/5", latitude: 53.342802, longitude: -6.251155},
//       {
//         building: "Examination Hall", latitude: 53.344273, longitude: -6.258005},
//       {
//         building: "Fellow's Square", latitude: 53.343686, longitude: -6.256851},
//       {
//         building: "Fitzgerald Building(Physics)", latitude: 53.343673, longitude: -6.252074},
//       {
//         building: "GMB", latitude: 53.344813, longitude: -6.256843},
//       {
//         building: "Goldsmith Hall", latitude: 53.343823, longitude: -6.248678},
//       {
//         building: "Hamilton Building", latitude: 53.343444, longitude: -6.250151},
//       {
//         building: "House 11-14 and 27", latitude: 53.345062, longitude: -6.256137},
//       {
//         building: "House 15-20", latitude: 53.345405, longitude: -6.256777},
//       {
//         building: "House 22-26", latitude: 53.344465, longitude: -6.256174},
//       {
//         building: "House 33-37", latitude: 53.3447, longitude: -6.255199},
//       {
//         building: "House 38-40", latitude: 53.344222, longitude: -6.254415},
//       {
//         building: "ICT Huts", latitude: 53.343483, longitude: -6.250992 },
//       {
//         building: "Library Square", latitude: 53.344414, longitude: -6.256949},
//       {
//         building: "Lloyd Institute", latitude: 53.343819, longitude: -6.250989},
//       {
//         building: "Moyne Building ", latitude: 53.342276, longitude: -6.253196},
//       {
//         building: "Museum Building", latitude: 53.343825, longitude: -6.25523},
//       {
//         building: "New Square", latitude: 53.344269, longitude: -6.25529 },
//       {
//         building: "Old Library ", latitude: 53.343947, longitude: -6.256724},
//       {
//         building: "Parsons Building ", latitude: 53.342253, longitude: -6.252451},
//       {
//         building: "Printing House", latitude: 53.344896, longitude: -6.255821},
//       {
//         building: "Regent House 4", latitude: 53.344112, longitude: -6.258645 },
//       {
//         building: "Regent House 6", latitude: 53.344553, longitude: -6.258832},
//       {
//         building: "Samuel Beckett Centre", latitude: 53.344844, longitude: -6.25431},
//       {
//         building: "Simon Perry Building", latitude: 53.344241, longitude: -6.252464},
//       {
//         building: "South-East Inner City", latitude: 53.343365, longitude: -6.252173},
//       {
//         building: "Sports Centre", latitude: 53.344036, longitude: -6.24981},
//       {
//         building: "TBSI", latitude: 53.343654, longitude: -6.247588},
//       {
//         building: "The Pavilion", latitude: 53.342692, longitude: -6.252917},
//       {
//         building: "Trinity College Chapel", latitude: 53.344717, longitude: -6.258006},
//       {
//         building: "Trinity Rugby Pitch", latitude: 53.343988, longitude: -6.253288},
//       {
//         building: "Ussher Library ", latitude: 53.343014, longitude: -6.255952
// }],

    buildings: ['Ussher Library', 'Trinity Rugby Pitch',"Trinity College Chapel","The Pavilion","TBSI","Sports Centre","South- East Inner City","Simon Perry Building","Samuel Beckett Centre","Regent House 6","Regent House 4","Printing House","Parsons Building", "Old Library","New Square","Museum Building","Moyne Building" ,"Lloyd Institute","Library Square","ICT Huts","House 38- 40","House 33- 37","House 22- 26","House 15- 20","House 11- 14 and 27","Hamilton Building","Goldsmith Hall","GMB","Fitzgerald Building(Physics)","Fellow's Square","Examination Hall","East End Development 4/5","College Park","Civil Engineering Building","Chemistry Building","Botany Bay Tennis Courts",
"Botany", "Berkeley Library","Atrium/ Buttry / Dinning Hall","Arts Building","Aras An Phiarsaigh","Anatomy Building","1937 Reading Room"
],
    longitude: [
      -6.255952,
      - 6.253288,
      - 6.258006,
      - 6.252917,
      - 6.247588,
      - 6.24981,
      - 6.252173,
      - 6.252464,
      - 6.25431,
      - 6.258832,
      - 6.258645,
      - 6.255821,
      - 6.252451,
      - 6.256724,
      - 6.25529,
      - 6.25523,
      - 6.253196,
      - 6.250989,
      - 6.256949,
      - 6.250992,
      - 6.254415,
      - 6.255199,
      - 6.256174,
      - 6.256777,
      - 6.256137,
      -6.250151,
      - 6.248678,
      - 6.256843,
      - 6.252074,
      - 6.256851,
      -6.258100,
     - 6.251155,
     - 6.254252,
     - 6.252776,
     - 6.252275,
     - 6.256738,
     - 6.25207,
     - 6.255912,
     - 6.257508,
     -6.257199,
     - 6.254941,
     - 6.251688,
     - 6.257673,
],

    latitude: [
      53.343014,
      53.343988,
      53.344717,
      53.342692,
      53.343654,
      53.344036,
      53.343365,
      53.344241,
      53.344844,
      53.344553,
      53.344112,
      53.344896,
      53.342253,
      53.343947,
      53.344269,
      53.343825,
      53.342276,
      53.343819,
      53.344414,
      53.343483,
      53.344222,
      53.3447,
      53.344465,
      53.345405,
      53.345062,
      53.343444,
      53.343823,
      53.344813,
      53.343673,
      53.343686,
      53.344153,
      53.342802,
      53.343133,
      53.344303,
      53.342922,
      53.345097,
      53.343996,
      53.343706,
      53.345054,
      53.343231,
      53.344883,
      53.343345,
      53.343851

],



    
    markers: [{
      iconPath: "/img/location.png",
      id: 0,
      
      longitude:-6.258904, 
      width: 50,
      height: 50,
      latitude:53.344473
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  getloc:function(e){
    // var long = e.currentTarget.dataset.longitude
    // var lat =e.currentTarget.dataset.latitude
    
    // console.log(long)
    // console.log(lat)
    
    // var markers=[{
    //   iconPath: "/img/location.png",
    //   id: 0,

    //   longitude: long,
    //   width: 50,
    //   height: 50,
    //   latitude: lat
    // }]
    
    // this.setData({markers:markers})
    // console.log(this.data.markers)

   var i = e.detail.value 
   console.log(i)

   var long = this.data.longitude[i]
   console.log(long)
   var lat = this.data.latitude[i]
   console.log(lat)

      var markers=[{
      iconPath: "/img/location.png",
      id: 0,

      longitude: long,
      width: 50,
      height: 50,
      latitude: lat
    }]

      this.setData({ markers: markers })
  }
})