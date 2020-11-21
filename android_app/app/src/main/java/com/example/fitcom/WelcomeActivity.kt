package com.example.fitcom

import android.content.pm.PackageManager
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.NumberPicker
import android.widget.Toast
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import kotlinx.android.synthetic.main.fragment_body_height_selection.*
import java.util.jar.Manifest

var user = NewUser()

class WelcomeActivity : AppCompatActivity() {

    private val CameraPermissionRequestCode = 101




    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_welcome)

        initHNumberPicker()

        val numberPicker = findViewById<NumberPicker>(R.id.hNumberPicker)

        if (numberPicker != null) {
            numberPicker.minValue = 0
            numberPicker.maxValue = 10

            numberPicker.wrapSelectorWheel = true
            numberPicker.setOnValueChangedListener { picker, oldVal, newVal ->
                val text = "Changed from $oldVal to $newVal"
                Toast.makeText(this@WelcomeActivity, text, Toast.LENGTH_SHORT).show()
            }
        }

    }

    public fun setupPermission() {
        val permission = ContextCompat.checkSelfPermission(this, android.Manifest.permission.CAMERA)

        if (permission != PackageManager.PERMISSION_GRANTED) {
            makeRequest()
        }
    }

    private fun makeRequest(){
        ActivityCompat.requestPermissions(this, arrayOf(android.Manifest.permission.CAMERA), CameraPermissionRequestCode)
    }

    override fun onRequestPermissionsResult(
        requestCode: Int,
        permissions: Array<out String>,
        grantResults: IntArray
    ) {
        when (requestCode){
            CameraPermissionRequestCode -> {
                if (grantResults.isEmpty() || grantResults[0] != PackageManager.PERMISSION_GRANTED) {
                    Toast.makeText(this, "You need the permission to scan!", Toast.LENGTH_SHORT).show()
                }
                else{
                    // success
                }
            }
        }
    }

    //        height numberpicker
    private fun initHNumberPicker(){

    }
}