package tech.fitcom.app.createTrainingplan

import android.content.Context
import androidx.recyclerview.widget.ItemTouchHelper
import androidx.recyclerview.widget.RecyclerView
import tech.fitcom.app.training.TrainingDayExerciseAdapter

class CreateTrainingplanDetailsDragAdapter(context: Context, adapter: CreateTrainingplanDetailsAdapter, dragDirs: Int, swipeDirs: Int) : ItemTouchHelper.SimpleCallback(dragDirs, swipeDirs) {
    var CreateTrainingplanDetailsAdapter = adapter

    override fun onMove(recyclerView: RecyclerView, viewHolder: RecyclerView.ViewHolder, target: RecyclerView.ViewHolder): Boolean
    {
        CreateTrainingplanDetailsAdapter.swapItems(viewHolder.adapterPosition, target.adapterPosition)
        return true
    }

    override fun onSwiped(viewHolder: RecyclerView.ViewHolder, direction: Int)
    {

    }
}