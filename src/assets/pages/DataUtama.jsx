import React from "react";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import Menu from "../components/Menu";
import SelectMenu from "../components/SelectMenu";

const DataUtama = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <PageTitle />
        <div className="bg-gray-200">
          <div className="bg-white m-6">
            <Menu />
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center font-semibold p-4">
                <div className="text-2xl">Data Pemberitahuan</div>
                <div className="flex gap-4">
                  <div>No Pengajuan : 20120B388FAE20240402000001</div>
                  <div>KSWP : VALID</div>
                  <div>Jenis API : 02</div>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-4">
                <SelectMenu />
                <div className="flex flex-col gap-2 border">
                  <div className="flex gap-10 p-4 font-semibold w-full items-center justify-center">
                    <div className="w-full flex flex-col gap-2">
                      <div>Nomor Pengajuan</div>
                      <input
                        type="text"
                        placeholder="Free on Board"
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <div>Tanggal Pengajuan</div>
                      <input
                        type="text"
                        placeholder="Euro"
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <div>Nomor Pendaftaran</div>
                      <input
                        type="text"
                        placeholder="17.639.000"
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <div>Tanggal Pendaftaran</div>
                      <input
                        type="text"
                        placeholder="17.639.000"
                        className="input input-bordered w-full"
                      />
                    </div>
                  </div>
                  <div className="flex gap-10 p-4 font-semibold w-full items-center justify-center">
                    <div className="w-full flex flex-col gap-2">
                      <div>Kantor Pabean</div>
                      <input
                        type="text"
                        placeholder="Free on Board"
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <div>SKEP Fasilitas</div>
                      <input
                        type="text"
                        placeholder="Euro"
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <div>Jenis PIB</div>
                      <input
                        type="text"
                        placeholder="Biasa"
                        className="input input-bordered w-full"
                      />
                    </div>
                  </div>
                  <div className="flex gap-10 p-4 font-semibold w-full items-center justify-center">
                    <div className="w-full flex flex-col gap-2">
                      <div>Jenis Impor</div>
                      <input
                        type="text"
                        placeholder="Free on Board"
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <div>Cara Pembayaran</div>
                      <input
                        type="text"
                        placeholder="Euro"
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <div>Transaksi</div>
                      <input
                        type="text"
                        placeholder="Biasa"
                        className="input input-bordered w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-2 mt-4">
                  <button className="btn btn-outline btn-primary">
                    Sebelumnya
                  </button>
                  <button className="btn btn-outline btn-primary">
                    Selanjutnya
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 flex items-center m-4">
          Copyright &copy; 2020 All Rights Reserved | Indonesia National Single
          Window
        </div>
      </div>
    </>
  );
};

export default DataUtama;
