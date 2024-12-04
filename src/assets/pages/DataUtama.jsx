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
                  <div className="flex w-full p-4 gap-4 justify-between">
                    <div>
                      <div className="font-semibold">Nomor Pengajuan</div>
                      <input
                        type="text"
                        placeholder="20120B388FAE20240402000001"
                        className="input input-bordered w-full min-w-[325px]"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">Tanggal Pengajuan</div>
                      <input
                        type="text"
                        placeholder="02-04-2024"
                        className="input input-bordered w-full min-w-[325px]"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">Nomor Pendaftaran</div>
                      <input
                        type="text"
                        placeholder="Nomor Pendaftaran"
                        className="input input-bordered w-full min-w-[325px]"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">Tanggal Pendaftaran</div>
                      <input
                        type="text"
                        placeholder="Tanggal Pendaftaran"
                        className="input input-bordered w-full min-w-[325px]"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between  p-4">
                    <div>
                      <div className="font-semibold">Kantor Pabean</div>
                      <input
                        type="text"
                        placeholder="KPU TANJUNG PRIOK"
                        className="input input-bordered w-full min-w-[450px]"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">SKEP Fasilitas</div>
                      <input
                        type="text"
                        placeholder="02-04-2024"
                        className="input input-bordered w-full min-w-[450px]"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">Jenis PIB</div>
                      <input
                        type="text"
                        placeholder="Biasa"
                        className="input input-bordered w-full min-w-[450px]"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between p-4">
                    <div>
                      <div className="font-semibold">Jenis Impor</div>
                      <input
                        type="text"
                        placeholder="UNTUK DIPAKAI"
                        className="input input-bordered w-full min-w-[450px]"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">Cara Pembayaran</div>
                      <input
                        type="text"
                        placeholder="BIASA/TUNAI"
                        className="input input-bordered w-full min-w-[450px]"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">Transaksi</div>
                      <input
                        type="text"
                        placeholder="Transaksi Perdagangan dengan Imbal Dagang"
                        className="input input-bordered w-full min-w-[450px]"
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
