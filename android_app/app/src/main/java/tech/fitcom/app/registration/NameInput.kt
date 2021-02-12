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

class NameInput : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val root = inflater.inflate(R.layout.fragment_name_input, container, false)
        val next = root.findViewById<Button>(R.id.next)

        next.setOnClickListener {
            val edtTextLayout = root.findViewById<TextInputLayout>(R.id.textInputName)
            val textfield = root.findViewById<EditText>(R.id.editText_name)

            if(textfield.text.length > 15) {
                edtTextLayout.isErrorEnabled = true
                edtTextLayout.error = "Dieser Name ist ungültig."
            }
            else {
                user.username = textfield.text.toString()
                Navigation.findNavController(root).navigate(R.id.emailInput)
            }
        }
        return root
    }
}