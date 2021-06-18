package com.jugglingwarehouse;

import android.os.Bundle; // here 
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // here \


public class MainActivity extends ReactActivity {

 @Override
   protected String getMainComponentName() {
     return "JugglingWarehouse";
   }

 @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here 
        super.onCreate(savedInstanceState);
    }
}
// package com.jugglingwarehouse;

// import com.facebook.react.ReactActivity;

// public class MainActivity extends ReactActivity {

//   /**
//    * Returns the name of the main component registered from JavaScript. This is used to schedule
//    * rendering of the component.
//    */
//   @Override
//   protected String getMainComponentName() {
//     return "JugglingWarehouse";
//   }
// }
