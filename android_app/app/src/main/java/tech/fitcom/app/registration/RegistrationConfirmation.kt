package tech.fitcom.app.registration

import android.content.Intent
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import tech.fitcom.app.HomeActivity
import tech.fitcom.app.R

class RegistrationConfirmation : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val root = inflater.inflate(R.layout.fragment_registration_confirmation, container, false)

        Handler(Looper.getMainLooper()).postDelayed({
            val intent = Intent(context, HomeActivity::class.java)
            startActivity(intent)
            if(getActivity() != null) {
                activity?.finish();
            }
        }, 3000)

        return root
    }
}