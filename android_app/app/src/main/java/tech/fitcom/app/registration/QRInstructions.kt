package tech.fitcom.app.registration

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import androidx.navigation.Navigation
import tech.fitcom.app.R

class QRInstructions : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val root = inflater.inflate(R.layout.fragment_qr_instructions, container, false)
        val scan =  root.findViewById<Button>(R.id.scan)
        val writeId = root.findViewById<Button>(R.id.write_id)

        scan.setOnClickListener {
            Navigation.findNavController(root).navigate(R.id.QRScanner)
        }
        writeId.setOnClickListener {
            Navigation.findNavController(root).navigate(R.id.studioIdInput)
        }
        return root
    }
}