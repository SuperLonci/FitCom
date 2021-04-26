package tech.fitcom.app.home

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import com.google.android.material.card.MaterialCardView
import tech.fitcom.app.R
import java.util.ArrayList

class Training : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val root = inflater.inflate(R.layout.fragment_training, container, false)
//        var cardTwoSplit = root.findViewById<MaterialCardView>(R.id.card_two_split)
//        var cardThreeSplit = root.findViewById<MaterialCardView>(R.id.card_three_split)
//        var cardList: ArrayList<MaterialCardView> = ArrayList()
//        cardList.add(cardTwoSplit)
//        cardList.add(cardThreeSplit)
//
//        for(i in cardList) {
//            i.setOnClickListener {
//                Toast.makeText(this.context, "You clicked a card", Toast.LENGTH_SHORT).show()
//            }
//        }
        return root
    }
}