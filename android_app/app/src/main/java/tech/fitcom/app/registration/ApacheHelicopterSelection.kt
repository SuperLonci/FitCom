package tech.fitcom.app.registration

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import android.widget.ImageButton
import androidx.navigation.Navigation
import com.google.android.material.textfield.TextInputLayout
import tech.fitcom.app.R

class ApacheHelicopterSelection : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val root = inflater.inflate(R.layout.fragment_apache_helicopter_selection, container, false)
        val malenext = root.findViewById<ImageButton>(R.id.male_imgbutton)
        val femalenext = root.findViewById<ImageButton>(R.id.female_imgbutton)
        val helinext = root.findViewById<ImageButton>(R.id.helicopter_imgbutton)

        malenext.setOnClickListener {
            user.usergender = "male"
            next(root)
        }
        femalenext.setOnClickListener {
            user.usergender = "female"
            next(root)
        }
        helinext.setOnClickListener {
            user.usergender = "helicopter"
            next(root)
        }
        return root
    }

    fun next(view: View){
        Navigation.findNavController(view).navigate(R.id.bodyHeightSelection)
    }
}