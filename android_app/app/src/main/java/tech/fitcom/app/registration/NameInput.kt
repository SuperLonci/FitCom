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
            val editTextLayout = root.findViewById<TextInputLayout>(R.id.textInputFirstName)
            val edittext_first_name = root.findViewById<EditText>(R.id.edittext_first_name)
            val edittext_last_name = root.findViewById<EditText>(R.id.edittext_last_name)

            if(edittext_first_name.text.length > 15) {
                editTextLayout.isErrorEnabled = true
                editTextLayout.error = "Dieser Name ist ungültig."
            }
            else {
                user.userfirstname = edittext_first_name.text.toString()
                user.userlastname = edittext_last_name.text.toString()
                Navigation.findNavController(root).navigate(R.id.birthdateInput)
            }
        }
        return root
    }
}