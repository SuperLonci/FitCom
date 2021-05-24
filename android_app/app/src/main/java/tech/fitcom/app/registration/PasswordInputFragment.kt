package tech.fitcom.app.registration

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import androidx.fragment.app.Fragment
import androidx.navigation.Navigation
import com.google.android.material.textfield.TextInputLayout
import tech.fitcom.app.R

class PasswordInputFragment: Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val root = inflater.inflate(R.layout.fragment_password_input, container, false)
        val next = root.findViewById<Button>(R.id.next)

        next.setOnClickListener {
            val edtTextLayout = root.findViewById<TextInputLayout>(R.id.text_password_input)
            val textfield = root.findViewById<EditText>(R.id.editText_password)

            if(textfield.text.length < 10) {
                edtTextLayout.isErrorEnabled = true
                edtTextLayout.error = "Nicht lang genug."
            }
            else {
                user.userpassword = textfield.text.toString()
                Navigation.findNavController(root).navigate(R.id.apacheHelicopterSelection)
            }
        }
        return root
    }
}