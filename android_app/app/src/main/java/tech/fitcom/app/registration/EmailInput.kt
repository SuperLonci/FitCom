package tech.fitcom.app.registration

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import androidx.navigation.Navigation
import com.google.android.material.textfield.TextInputLayout
import tech.fitcom.app.R

class EmailInput : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val root = inflater.inflate(R.layout.fragment_email_input, container, false)
        val next = root.findViewById<Button>(R.id.next)

        next.setOnClickListener {
            val edtTextLayout = root.findViewById<TextInputLayout>(R.id.textInputEmail)
            val textfield = root.findViewById<EditText>(R.id.editText_email)

            if(textfield.text.length > 10) {
                edtTextLayout.isErrorEnabled = true
                edtTextLayout.error = "Diese Email ist ungültig."

            }
            else {
                user.useremail = textfield.text.toString()

                Navigation.findNavController(root).navigate(R.id.apacheHelicopterSelection)
            }
        }
        return root
    }
}