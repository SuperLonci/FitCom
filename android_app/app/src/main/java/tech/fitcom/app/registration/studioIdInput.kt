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
import kotlinx.android.synthetic.main.fragment_studio_id_input.*
import tech.fitcom.app.R

class StudioIdInput : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val root = inflater.inflate(R.layout.fragment_studio_id_input, container, false)
        val next = root.findViewById<Button>(R.id.next)

        next.setOnClickListener {
            val edtTextLayout = root.findViewById<TextInputLayout>(R.id.text_input_layout_id)
            if(root.findViewById<EditText>(R.id.editText_id).text.length > 10) {
//                ToDo: Backend Anfrage zur Verifizierung
                edtTextLayout.isErrorEnabled = true
                edtTextLayout.error = "Diese StudioID ist ungültig."
            }
            else {
//                ToDo: Vorher abfangen und bereinigten Int weitergeben
                user.studioID = editText_id.text.toString()
                Navigation.findNavController(root).navigate(R.id.nameInput)
            }
        }
        return root
    }
}