package tech.fitcom.app.registration

import android.os.Build
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.NumberPicker
import androidx.fragment.app.Fragment
import androidx.navigation.Navigation
import tech.fitcom.app.R
import java.time.LocalDate

class BirthdateInputFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val root = inflater.inflate(R.layout.fragment_birthdate_input, container, false)
        val next = root.findViewById<Button>(R.id.next)
        val numberPicker_day = root.findViewById<NumberPicker>(R.id.numberPicker_birthdate_day)
        numberPicker_day.minValue = 1
        numberPicker_day.maxValue = 31
        numberPicker_day.value = 1

        val numberPicker_month = root.findViewById<NumberPicker>(R.id.numberPicker_birthdate_month)
        numberPicker_month.minValue = 1
        numberPicker_month.maxValue = 12
        numberPicker_month.value = 1

        val numberPicker_year = root.findViewById<NumberPicker>(R.id.numberPicker_birthdate_year)
        numberPicker_year.minValue = 1930
        numberPicker_year.maxValue = java.util.Calendar.YEAR - 16
        numberPicker_year.value = java.util.Calendar.YEAR - 25


        next.setOnClickListener {
            var birthdate: LocalDate = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                LocalDate.of(numberPicker_year.value, numberPicker_month.value, numberPicker_day.value)
            } else {
                TODO("VERSION.SDK_INT < O")
            }
            user.userbirthdate = birthdate.toString()
            Navigation.findNavController(root).navigate(R.id.emailInput)
        }
        return root

    }
}