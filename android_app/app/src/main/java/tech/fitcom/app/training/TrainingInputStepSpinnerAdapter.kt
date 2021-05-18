package tech.fitcom.app.training

import android.content.Context
import android.graphics.Typeface
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ArrayAdapter
import android.widget.TextView
import kotlinx.android.synthetic.main.spinner_item.view.*
import tech.fitcom.app.DataManager
import tech.fitcom.app.R

class TrainingInputStepSpinnerAdapter(getContext: Context, val dataSource: ArrayList<String>) : ArrayAdapter<String>(getContext, R.layout.spinner_item, dataSource) {

// initialize an array adapter for spinner
    override fun getDropDownView(
        position: Int,
        convertView: View?,
        parent: ViewGroup
    ): View {
        val view: TextView = super.getDropDownView(
            position,
            convertView,
            parent
        ) as TextView

/*        // set item text style and font
        view.setTypeface(Typeface.DEFAULT)

        view.setTextSize(20.0F)

        // set spinner item padding
        view.setPadding(
            30, // left
            0, // top
            60, // right
            0 // bottom
        )*/

        return view
    }
}
