package com.example.fitcom.ui.welcome

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class WelcomeQRInstructionsViewModel : ViewModel() {

    private val _text = MutableLiveData<String>().apply {
        value = "This is WelcomeQRInstructions Fragment"
    }
    val text: LiveData<String> = _text
}