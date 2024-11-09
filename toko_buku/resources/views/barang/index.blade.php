@extends('layouts.app')

@section('title', 'Data Barang')

@section('contents')
  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Data Buku</h6>
    </div>
    <div class="card-body">
        <!-- Topbar Search -->
      <div class="d-flex justify-content-between">
        <div>
          @if (auth()->user()->level == 'Admin')
          <a href="{{ route('barang.tambah') }}" class="btn btn-primary mb-3">Tambah Buku</a>
          @endif
        </div>
        <div>
          <!-- Formulir Pencarian -->
        <form action="{{ route('search') }}" method="GET" class="form-inline mb-3">
            <div class="input-group">
                <input type="text" name="search" class="form-control" placeholder="Cari barang..." value="{{ request('search') }}">
                <div class="input-group-append">
                    <button class="btn btn-primary" type="submit">
                        <i class="fas fa-search"></i> Cari
                    </button>
                </div>
            </div>
        </form>
        </div>
      </div>
      <div class="table-responsive">
  <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
    <thead>
      <tr>
        <th>No</th>
        <th>Kode Buku</th>
        <th>Nama Buku</th>
        <th>Kategori</th>
        <th>Harga</th>
        <th>Jumlah</th>
        <th>Aksi</th> <!-- Selalu ada kolom aksi -->
      </tr>
    </thead>
    <tbody>
      @php($no = 1)
        @foreach($data as $row)
              <tr>
                  <th>{{ $no++ }}</th>
                  <td>{{ $row->kode_barang }}</td>
                  <td>{{ $row->nama_barang }}</td>
                  <td>{{ $row->kategori->nama }}</td>
                  <td>{{ $row->harga }}</td>
                  <td>{{ $row->jumlah }}</td>

                  <td>
                      @if (auth()->user()->level == 'Admin')
                          <!-- Admin dapat mengedit atau menghapus -->
                          <a href="{{ route('barang.edit', $row->id) }}" class="btn btn-warning">Edit</a>
                          <a href="{{ route('barang.hapus', $row->id) }}" class="btn btn-danger">Hapus</a>
                      @else
                          <div class="product-item">
                              <h5>{{ $row->nama_barang }}</h5> <!-- Ganti $item dengan $row -->
                              <p>Rp{{ number_format($row->harga) }}</p> <!-- Ganti $item dengan $row -->
                              <button class="btn btn-success add-to-cart"
                                      onclick="tambahKeKeranjang({{ $row->id }}, '{{ $row->nama_barang }}', {{ $row->harga }})">
                                  Tambahkan ke Keranjang
                              </button>
                            </div>
                            <br>
                          <a href="{{ route('transaksi.beli', $row->id) }}" class="btn btn-success">Belikan Buku</a>
                      @endif
                  </td>
              </tr>
          @endforeach

    </tbody>
  </table>
</div>
    </div>
  </div>
    


@endsection