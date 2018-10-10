package com.example.jham0.aircontrolapp;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.LinearLayout;

public class inicio extends AppCompatActivity {

    //Components
    LinearLayout btnTools;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_inicio);
        connect();
        onClickButtons();
    }

    private void connect() {
        btnTools = findViewById(R.id.ly_tools);
    }

    public void onClickButtons() {
        btnTools.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(getApplicationContext(),tools.class));
            }
        });
    }
}
