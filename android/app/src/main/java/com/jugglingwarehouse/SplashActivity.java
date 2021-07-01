package com.jugglingwarehouse; // make sure this is your package name

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import org.devio.rn.splashscreen.SplashScreen;

import androidx.appcompat.app.AppCompatActivity;

public class SplashActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //SplashScreen.show(this);
        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
        finish();
    }
}