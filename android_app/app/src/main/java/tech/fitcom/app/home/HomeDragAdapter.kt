package tech.fitcom.app.home

import android.content.Context
import androidx.recyclerview.widget.ItemTouchHelper
import androidx.recyclerview.widget.RecyclerView
import tech.fitcom.app.training.TrainingDayExerciseAdapter

class HomeDragAdapter(context: Context, adapter: HomeAdapter, dragDirs: Int, swipeDirs: Int) : ItemTouchHelper.SimpleCallback(dragDirs, swipeDirs) {
    var HomeAdapter = adapter

    override fun onMove(recyclerView: RecyclerView, viewHolder: RecyclerView.ViewHolder, target: RecyclerView.ViewHolder): Boolean
    {
        return true
    }

    override fun onSwiped(viewHolder: RecyclerView.ViewHolder, direction: Int)
    {
        HomeAdapter.deleteItem(viewHolder.bindingAdapterPosition)
    }
}
