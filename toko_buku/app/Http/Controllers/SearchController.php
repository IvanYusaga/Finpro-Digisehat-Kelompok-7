<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        // Ambil kata kunci pencarian dari request
        $search = $request->input('search');

        // Lakukan pencarian di semua kolom
        if ($search) {
            $barang = Barang::where('kode_barang', 'LIKE', "%{$search}%")
                ->orWhere('nama_barang', 'LIKE', "%{$search}%")
                ->orWhere('id_kategori', 'LIKE', "%{$search}%")
                ->orWhere('harga', 'LIKE', "%{$search}%")
                ->orWhere('jumlah', 'LIKE', "%{$search}%")
                ->get();
        } else {
            $barang = Barang::get();
        }

        // Kirim hasil pencarian ke view
        return view('barang.index', ['data' => $barang, 'search' => $search]);
    }
}
