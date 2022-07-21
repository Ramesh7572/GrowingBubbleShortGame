var admobid = {};

// TODO: replace the following ad units with your own
if( /(android)/i.test(navigator.userAgent) ) {
  admobid = { // for Android
    banner: 'ca-app-pub-3343015866151484/3202801030',
    interstitial: 'ca-app-pub-3343015866151484/6639752661',
    rewardvideo: 'ca-app-pub-3343015866151484/3822017630',
  };
}

function initApp() {
  if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

  // this will create a banner on startup
  AdMob.createBanner( {
    adId: admobid.banner,
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    overlap: false,
    autoShow: true,
    bgColor: 'black'
  } );

  // this will load a full screen ad on startup
  AdMob.prepareInterstitial({
    adId: admobid.interstitial,
    autoShow: false
  });
  // this will load a full screen ad on startup
  AdMob.prepareRewardVideoAd({
      adId: admobid.RewardVideoAd,
      autoShow: false
    });
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}
